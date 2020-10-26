import { Common } from './videoeditors.common';
import * as application from "tns-core-modules/application";

declare var com;
declare var ly;
declare var android;

export class Videoeditors extends Common {
  public static VESDK_RESULT = 1;
  public static GALLERY_RESULT = 2;


  test() {
    console.log("On ios plugin");
    var context = application.android.context;
    var VE = new com.videoeditorsdk.android.app.KVideoEditorDemoActivity();
    var intent = new android.content.Intent(android.content.Intent.ACTION_PICK);
    intent.setDataAndType(android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI, "video/*");
    let activity = application.android.foregroundActivity || application.android.startActivity;
    activity.startActivityForResult(intent, Videoeditors.GALLERY_RESULT);
    return VE.test();
  }
}
