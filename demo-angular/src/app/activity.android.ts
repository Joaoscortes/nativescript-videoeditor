import { setActivityCallbacks, AndroidActivityCallbacks } from "tns-core-modules/ui/frame";
import * as application from "tns-core-modules/application";

declare var com;
declare var ly;
declare var android;

@JavaProxy("org.myApp.MainActivity")
// class Activity extends com.videoeditorsdk.android.app.KVideoEditorDemoActivity {
class Activity extends androidx.appcompat.app.AppCompatActivity {
    public isNativeScriptActivity;

    private _callbacks: AndroidActivityCallbacks;

    public onCreate(savedInstanceState: android.os.Bundle): void {
        // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
        // The JS constructor might not be called because the activity is created from Android.
        this.isNativeScriptActivity = true;
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, this.getIntent(), super.onCreate);
    }

    public onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    public onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    public onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    public onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);

        console.log("resultCode", resultCode);
        console.log("requestCode", requestCode);

        console.log(resultCode == -1 && requestCode == 2);
        if (resultCode == -1 && requestCode == 2) {
            // Open Editor with some uri in this case with an image selected from the system gallery.
            var selectedImage = data.getData();
            console.log(selectedImage);
            this.openEditor(selectedImage);
        } else if (resultCode == -1 && requestCode == 1) {
            // Editor has saved an Image.
            var intentData = new ly.img.android.pesdk.backend.model.EditorSDKResult(data);

            var resultURI = intentData.getResultUri();
            var sourceURI = intentData.getSourceUri();

            // This adds the result and source image to Android's gallery
            intentData.notifyGallery(ly.img.android.pesdk.backend.model.EditorSDKResult.UPDATE_RESULT && ly.img.android.pesdk.backend.model.EditorSDKResult.UPDATE_SOURCE);

            console.info("PESDK", "Source image is located here " + sourceURI);
            console.info("PESDK", "Result image is located here " + resultURI);

            // TODO: Do something with the result image

            // OPTIONAL: read the latest state to save it as a serialisation
            var lastState = intentData.getSettingsList();
            try {
                new ly.img.android.serializer._3.IMGLYFileWriter(lastState).writeJson(new File(
                    android.os.Environment.getExternalStorageDirectory(),
                    "serialisationReadyToReadWithPESDKFileReader.json"
                ));
            } catch (e) { console.error(e); }

        } else if (resultCode == 0 && requestCode == 1) {
            // Editor was canceled
            var intentData = new ly.img.android.pesdk.backend.model.EditorSDKResult(data);

            var sourceURI = intentData.getSourceUri();
            // TODO: Do something with the source...
        }

    }

    private openEditor(inputSource) {
        console.log("Init openEditor");

        var settingsList = this.createVesdkSettingsList();
        console.log("settingsList");

        // Set input image
        settingsList.getSettingsModel(ly.img.android.pesdk.backend.model.state.LoadSettings.class).setSource(inputSource);
        console.log("After Set input image");

        // Set output video
        settingsList.getSettingsModel(ly.img.android.pesdk.backend.model.state.SaveSettings.class).setOutputToGallery(android.os.Environment.DIRECTORY_DCIM);
        console.log("After Set output image");

        let activity = application.android.foregroundActivity || application.android.startActivity;
        new ly.img.android.pesdk.ui.activity.VideoEditorBuilder(activity)
            .setSettingsList(settingsList)
            .startActivityForResult(activity, 1);

    }

    private createVesdkSettingsList() {
        console.log("Init createVesdkSettingsList");
        // Create a empty new SettingsList and apply the changes on this referance.
        var settingsList = new ly.img.android.pesdk.VideoEditorSettingsList();

        // If you include our asset Packs and you use our UI you also need to add them to the UI,
        // otherwise they are only available for the backend
        // See the specific feature sections of our guides if you want to know how to add our own Assets.

        settingsList.getSettingsModel(ly.img.android.pesdk.ui.model.state.UiConfigFilter.class).setFilterList(
            ly.img.android.pesdk.assets.filter.basic.FilterPackBasic.getFilterPack()
        );

        settingsList.getSettingsModel(ly.img.android.pesdk.ui.model.state.UiConfigText.class).setFontList(
            ly.img.android.pesdk.assets.font.basic.FontPackBasic.getFontPack()
        );

        settingsList.getSettingsModel(ly.img.android.pesdk.ui.model.state.UiConfigFrame.class).setFrameList(
            ly.img.android.pesdk.assets.frame.basic.FramePackBasic.getFramePack()
        );

        settingsList.getSettingsModel(ly.img.android.pesdk.ui.model.state.UiConfigOverlay.class).setOverlayList(
            ly.img.android.pesdk.assets.overlay.basic.OverlayPackBasic.getOverlayPack()
        );

        settingsList.getSettingsModel(ly.img.android.pesdk.ui.model.state.UiConfigSticker.class).setStickerLists(
            ly.img.android.pesdk.assets.sticker.emoticons.StickerPackEmoticons.getStickerCategory(),
            ly.img.android.pesdk.assets.sticker.shapes.StickerPackShapes.getStickerCategory()
        );

        return settingsList;
    }
}
