
declare const enum AdjustOverlayAction {

	Undo = 0,

	Redo = 1
}

declare const enum AdjustTool {

	Brightness = 0,

	Contrast = 1,

	Saturation = 2,

	Shadows = 3,

	Highlights = 4,

	Exposure = 5,

	Clarity = 6,

	Gamma = 7,

	Blacks = 8,

	Whites = 9,

	Temperature = 10,

	Sharpness = 11
}

declare const enum BrushOverlayAction {

	Undo = 0,

	Redo = 1,

	Delete = 2,

	BringToFront = 3
}

declare const enum BrushTool {

	Color = 0,

	Size = 1,

	Hardness = 2
}

declare const enum CameraControllerError {

	MultipleCallsToSetup = 0,

	UnableToInitializeCaptureDevice = 1
}

declare const enum FrameAction {

	Replace = 0,

	Width = 1,

	Opacity = 2
}

declare const enum FrameBuildMode {

	Horizontal = 0,

	Vertical = 1
}

declare const enum FrameLayoutMode {

	HorizontalInside = 0,

	VerticalInside = 1
}

declare const enum FrameTileMode {

	Stretch = 0,

	Repeat = 1
}

declare class IMGLTextOptionsToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): IMGLTextOptionsToolControllerOptions; // inherited from NSObject

	static new(): IMGLTextOptionsToolControllerOptions; // inherited from NSObject

	readonly actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: TextAction) => void;

	readonly overlayActionSelectedClosure: (p1: TextOverlayAction) => void;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: TextOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly textActionSelectedClosure: (p1: TextAction) => void;

	constructor(o: { builder: PESDKTextOptionsToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTextOptionsToolControllerOptionsBuilder): this;
}

declare class IMGLY extends NSObject {

	static alloc(): IMGLY; // inherited from NSObject

	static crashIfNeededAndReturnError(): boolean;

	static new(): IMGLY; // inherited from NSObject

	static replaceClassWithError(builtinClass: typeof NSObject, replacingClass: typeof NSObject): boolean;

	static setBundleImageBlock(value: (p1: string) => UIImage): void;

	static setForceExtendedSRGBColorSpace(value: boolean): void;

	static setForceRenderHighResolutionImage(value: boolean): void;

	static setLocalizationBlock(value: (p1: string) => string): void;

	static setLocalizationDictionary(value: NSDictionary<string, NSDictionary<string, string>>): void;

	static setMetalDisabled(newValue: boolean): void;

	static setMetalFiltersDisabled(newValue: boolean): void;

	static setProgressView(value: PESDKProgressView): void;

	static setToolbarItemBlock(value: (p1: UIViewController, p2: PESDKToolbarItem) => PESDKToolbarItem): void;

	static unlockWithLicenseAt(url: NSURL): void;

	static unlockWithLicenseFromDictionaryError(dictionary: NSDictionary<string, any>): boolean;

	static unlockWithLicenseFromStringError(string: string): boolean;

	static unlockWithLicenseFromURLError(url: NSURL): boolean;

	static readonly analytics: PESDKAnalytics;

	static bundleImageBlock: (p1: string) => UIImage;

	static forceExtendedSRGBColorSpace: boolean;

	static forceRenderHighResolutionImage: boolean;

	static localizationBlock: (p1: string) => string;

	static localizationDictionary: NSDictionary<string, NSDictionary<string, string>>;

	static metalDisabled: boolean;

	static metalFiltersDisabled: boolean;

	static progressView: PESDKProgressView;

	static toolbarItemBlock: (p1: UIViewController, p2: PESDKToolbarItem) => PESDKToolbarItem;
}

declare var ImglyKitVersionNumber: number;

declare var ImglyKitVersionString: interop.Reference<number>;

declare const enum LogLevel {

	None = 0,

	Error = 1,

	Warn = 2,

	Info = 3,

	Debug = 4
}

declare const enum MediaEditOverlayAction {

	Undo = 0,

	Redo = 1
}

declare class PESDK extends IMGLY {

	static alloc(): PESDK; // inherited from NSObject

	static new(): PESDK; // inherited from NSObject
}

declare class PESDKActionListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKActionListSectionController; // inherited from NSObject

	static new(): PESDKActionListSectionController; // inherited from NSObject
}

declare class PESDKActionMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKActionMenuItem; // inherited from NSObject

	static createMagicItem(): PESDKActionMenuItem;

	static new(): PESDKActionMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly supportsPhoto: boolean;

	readonly supportsVideo: boolean;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { title: string; icon: UIImage; objcActionClosure: (p1: PESDKPhotoEditModel) => void; objcSelectedClosure: (p1: PESDKPhotoEditModel) => boolean; });

	initWithTitleIconObjcActionClosureObjcSelectedClosure(title: string, icon: UIImage, objcActionClosure: (p1: PESDKPhotoEditModel) => void, objcSelectedClosure: (p1: PESDKPhotoEditModel) => boolean): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKAdjustEditController extends PESDKViewController {

	static alloc(): PESDKAdjustEditController; // inherited from NSObject

	static new(): PESDKAdjustEditController; // inherited from NSObject

	boxedPhotoEditModel: PESDKPhotoEditModel;

	delegate: PESDKAdjustEditControllerDelegate;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	updateSliderFor(adjustTool: AdjustTool): void;
}

interface PESDKAdjustEditControllerDelegate {

	adjustEditControllerDidChangePhotoEditModel(adjustEditController: PESDKAdjustEditController): void;

	adjustEditControllerDidChangePreferredPreviewViewInsetsAnimated(adjustEditController: PESDKAdjustEditController, animated: boolean): void;

	adjustEditControllerDidEndSliding(adjustEditController: PESDKAdjustEditController): void;

	adjustEditControllerDidSlideToValue(adjustEditController: PESDKAdjustEditController, value: number): void;

	adjustEditControllerTargetScrollView(adjustEditController: PESDKAdjustEditController): UIScrollView;
}
declare var PESDKAdjustEditControllerDelegate: {

	prototype: PESDKAdjustEditControllerDelegate;
};

declare class PESDKAdjustListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKAdjustListSectionController; // inherited from NSObject

	static new(): PESDKAdjustListSectionController; // inherited from NSObject
}

declare class PESDKAdjustMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKAdjustMenuItem; // inherited from NSObject

	static new(): PESDKAdjustMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { adjustTool: AdjustTool; });

	initWithAdjustTool(adjustTool: AdjustTool): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKAdjustToolController extends PESDKMenuToolController implements PESDKAdjustEditControllerDelegate {

	static alloc(): PESDKAdjustToolController; // inherited from NSObject

	static new(): PESDKAdjustToolController; // inherited from NSObject

	readonly adjustEditController: PESDKAdjustEditController;

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly undoButton: PESDKOverlayButton;

	adjustEditControllerDidChangePhotoEditModel(adjustEditController: PESDKAdjustEditController): void;

	adjustEditControllerDidChangePreferredPreviewViewInsetsAnimated(adjustEditController: PESDKAdjustEditController, animated: boolean): void;

	adjustEditControllerDidEndSliding(adjustEditController: PESDKAdjustEditController): void;

	adjustEditControllerDidSlideToValue(adjustEditController: PESDKAdjustEditController, value: number): void;

	adjustEditControllerTargetScrollView(adjustEditController: PESDKAdjustEditController): UIScrollView;
}

declare class PESDKAdjustToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKAdjustToolControllerOptions; // inherited from NSObject

	static new(): PESDKAdjustToolControllerOptions; // inherited from NSObject

	readonly adjustActionSelectedClosure: (p1: AdjustOverlayAction) => void;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: AdjustOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly showResetButton: boolean;

	readonly sliderChangedValueClosure: (p1: PESDKSlider, p2: AdjustTool) => void;

	readonly sliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly sliderContainerConfigurationClosure: (p1: UIView) => void;

	constructor(o: { builder: PESDKAdjustToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKAdjustToolControllerOptionsBuilder): this;
}

declare class PESDKAdjustToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKAdjustToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKAdjustToolControllerOptionsBuilder; // inherited from NSObject

	adjustActionSelectedClosure: (p1: AdjustOverlayAction) => void;

	adjustToolButtonConfigurationBlock: (p1: PESDKMenuCollectionViewCell, p2: number) => void;

	adjustToolSelectedBlock: (p1: number) => void;

	allowedAdjustOverlayActions: NSArray<number>;

	allowedAdjustTools: NSArray<number>;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: AdjustOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	showResetButton: boolean;

	sliderChangedValueClosure: (p1: PESDKSlider, p2: AdjustTool) => void;

	sliderConfigurationClosure: (p1: PESDKSlider) => void;

	sliderContainerConfigurationClosure: (p1: UIView) => void;
}

declare class PESDKAdjustmentModel extends NSObject {

	static alloc(): PESDKAdjustmentModel; // inherited from NSObject

	static new(): PESDKAdjustmentModel; // inherited from NSObject

	blacks: number;

	brightness: number;

	clarity: number;

	contrast: number;

	exposure: number;

	gamma: number;

	highlights: number;

	saturation: number;

	shadows: number;

	sharpness: number;

	temperature: number;

	whites: number;

	constructor(o: { brightness: number; contrast: number; shadows: number; highlights: number; exposure: number; clarity: number; saturation: number; gamma: number; blacks: number; whites: number; temperature: number; sharpness: number; });

	initWithBrightnessContrastShadowsHighlightsExposureClaritySaturationGammaBlacksWhitesTemperatureSharpness(brightness: number, contrast: number, shadows: number, highlights: number, exposure: number, clarity: number, saturation: number, gamma: number, blacks: number, whites: number, temperature: number, sharpness: number): this;
}

declare class PESDKAnalytics extends NSObject implements PESDKAnalyticsClient {

	static alloc(): PESDKAnalytics; // inherited from NSObject

	static new(): PESDKAnalytics; // inherited from NSObject

	isEnabled: boolean;

	addAnalyticsClient(client: PESDKAnalyticsClient): void;

	logEventAttributes(event: string, attributes: NSDictionary<string, any>): void;

	logScreenView(screenView: string): void;

	removeAnalyticsClient(client: PESDKAnalyticsClient): void;
}

interface PESDKAnalyticsClient {

	logEventAttributes(event: string, attributes: NSDictionary<string, any>): void;

	logScreenView(screenView: string): void;
}
declare var PESDKAnalyticsClient: {

	prototype: PESDKAnalyticsClient;
};

declare var PESDKAnalyticsEventAttributeNameAction: string;

declare var PESDKAnalyticsEventAttributeNameAlignment: string;

declare var PESDKAnalyticsEventAttributeNameAspectRatio: string;

declare var PESDKAnalyticsEventAttributeNameBackgroundColor: string;

declare var PESDKAnalyticsEventAttributeNameCameraPosition: string;

declare var PESDKAnalyticsEventAttributeNameColor: string;

declare var PESDKAnalyticsEventAttributeNameCropRect: string;

declare var PESDKAnalyticsEventAttributeNameFilterIntensity: string;

declare var PESDKAnalyticsEventAttributeNameFilterType: string;

declare var PESDKAnalyticsEventAttributeNameFlashMode: string;

declare var PESDKAnalyticsEventAttributeNameFont: string;

declare var PESDKAnalyticsEventAttributeNameFrame: string;

declare var PESDKAnalyticsEventAttributeNameOption: string;

declare var PESDKAnalyticsEventAttributeNameOverlayIntensity: string;

declare var PESDKAnalyticsEventAttributeNameOverlayType: string;

declare var PESDKAnalyticsEventAttributeNameRecordingMode: string;

declare var PESDKAnalyticsEventAttributeNameSticker: string;

declare var PESDKAnalyticsEventAttributeNameStickerCategory: string;

declare var PESDKAnalyticsEventAttributeNameStraightenAngle: string;

declare var PESDKAnalyticsEventAttributeNameText: string;

declare var PESDKAnalyticsEventAttributeNameTextColor: string;

declare var PESDKAnalyticsEventAttributeNameTextDesignType: string;

declare var PESDKAnalyticsEventAttributeNameValue: string;

declare var PESDKAnalyticsEventAttributeValueActionAdd: string;

declare var PESDKAnalyticsEventAttributeValueActionAlignment: string;

declare var PESDKAnalyticsEventAttributeValueActionBringToFront: string;

declare var PESDKAnalyticsEventAttributeValueActionDelete: string;

declare var PESDKAnalyticsEventAttributeValueActionFlip: string;

declare var PESDKAnalyticsEventAttributeValueActionInvert: string;

declare var PESDKAnalyticsEventAttributeValueActionRedo: string;

declare var PESDKAnalyticsEventAttributeValueActionStraighten: string;

declare var PESDKAnalyticsEventAttributeValueActionUndo: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionBlacks: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionBrightness: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionClarity: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionContrast: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionExposure: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionGamma: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionHighlights: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionSaturation: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionShadows: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionSharpness: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionTemperature: string;

declare var PESDKAnalyticsEventAttributeValueAdjustOptionWhites: string;

declare var PESDKAnalyticsEventAttributeValueBrushOptionHardness: string;

declare var PESDKAnalyticsEventAttributeValueBrushOptionSize: string;

declare var PESDKAnalyticsEventAttributeValueCameraPositionBack: string;

declare var PESDKAnalyticsEventAttributeValueCameraPositionFront: string;

declare var PESDKAnalyticsEventAttributeValueFlashAuto: string;

declare var PESDKAnalyticsEventAttributeValueFlashOff: string;

declare var PESDKAnalyticsEventAttributeValueFlashOn: string;

declare var PESDKAnalyticsEventAttributeValueFocusOptionGaussian: string;

declare var PESDKAnalyticsEventAttributeValueFocusOptionLinear: string;

declare var PESDKAnalyticsEventAttributeValueFocusOptionMirrored: string;

declare var PESDKAnalyticsEventAttributeValueFocusOptionNone: string;

declare var PESDKAnalyticsEventAttributeValueFocusOptionRadial: string;

declare var PESDKAnalyticsEventAttributeValueFrameOptionOpacity: string;

declare var PESDKAnalyticsEventAttributeValueFrameOptionWidth: string;

declare var PESDKAnalyticsEventAttributeValueRecordingModePhoto: string;

declare var PESDKAnalyticsEventAttributeValueRecordingModeVideo: string;

declare var PESDKAnalyticsEventNameAdjustOptionChange: string;

declare var PESDKAnalyticsEventNameAdjustValueChange: string;

declare var PESDKAnalyticsEventNameApplyChanges: string;

declare var PESDKAnalyticsEventNameAutoEnhancementOff: string;

declare var PESDKAnalyticsEventNameAutoEnhancementOn: string;

declare var PESDKAnalyticsEventNameBrushActionSelect: string;

declare var PESDKAnalyticsEventNameBrushColorChange: string;

declare var PESDKAnalyticsEventNameBrushOptionChange: string;

declare var PESDKAnalyticsEventNameBrushValueChange: string;

declare var PESDKAnalyticsEventNameCameraFlashSelect: string;

declare var PESDKAnalyticsEventNameCameraHideFilter: string;

declare var PESDKAnalyticsEventNameCameraPhotoRollSelect: string;

declare var PESDKAnalyticsEventNameCameraPositionSelect: string;

declare var PESDKAnalyticsEventNameCameraRecordVideo: string;

declare var PESDKAnalyticsEventNameCameraRecordingModeChange: string;

declare var PESDKAnalyticsEventNameCameraShowFilter: string;

declare var PESDKAnalyticsEventNameCameraTakePhoto: string;

declare var PESDKAnalyticsEventNameDiscardChanges: string;

declare var PESDKAnalyticsEventNameFilterIntensityChange: string;

declare var PESDKAnalyticsEventNameFilterSelect: string;

declare var PESDKAnalyticsEventNameFocusBlurRadiusChange: string;

declare var PESDKAnalyticsEventNameFocusControlPointsChange: string;

declare var PESDKAnalyticsEventNameFocusFadeWidthChange: string;

declare var PESDKAnalyticsEventNameFocusOptionChange: string;

declare var PESDKAnalyticsEventNameFrameDeselect: string;

declare var PESDKAnalyticsEventNameFrameSelect: string;

declare var PESDKAnalyticsEventNameFrameValueChange: string;

declare var PESDKAnalyticsEventNameOverlayIntensityChange: string;

declare var PESDKAnalyticsEventNameOverlaySelect: string;

declare var PESDKAnalyticsEventNamePhotoEditOverlayActionSelect: string;

declare var PESDKAnalyticsEventNameStickerActionSelect: string;

declare var PESDKAnalyticsEventNameStickerAdd: string;

declare var PESDKAnalyticsEventNameStickerCategorySelect: string;

declare var PESDKAnalyticsEventNameStickerColorChange: string;

declare var PESDKAnalyticsEventNameStickerRectChange: string;

declare var PESDKAnalyticsEventNameStickerRemove: string;

declare var PESDKAnalyticsEventNameStickerRotationChange: string;

declare var PESDKAnalyticsEventNameStickerSelect: string;

declare var PESDKAnalyticsEventNameTextActionSelect: string;

declare var PESDKAnalyticsEventNameTextAdd: string;

declare var PESDKAnalyticsEventNameTextBackgroundColorChange: string;

declare var PESDKAnalyticsEventNameTextDesignAdd: string;

declare var PESDKAnalyticsEventNameTextDesignRectChange: string;

declare var PESDKAnalyticsEventNameTextDesignRemove: string;

declare var PESDKAnalyticsEventNameTextDesignRotationChange: string;

declare var PESDKAnalyticsEventNameTextDesignSelect: string;

declare var PESDKAnalyticsEventNameTextEdit: string;

declare var PESDKAnalyticsEventNameTextFontColorChange: string;

declare var PESDKAnalyticsEventNameTextFontFullscreenEnter: string;

declare var PESDKAnalyticsEventNameTextFontFullscreenExit: string;

declare var PESDKAnalyticsEventNameTextFontSelect: string;

declare var PESDKAnalyticsEventNameTextFontSizeChange: string;

declare var PESDKAnalyticsEventNameTextRectChange: string;

declare var PESDKAnalyticsEventNameTextRemove: string;

declare var PESDKAnalyticsEventNameTextRotationChange: string;

declare var PESDKAnalyticsEventNameTransformAspectRatioSelect: string;

declare var PESDKAnalyticsEventNameTransformCropRectChange: string;

declare var PESDKAnalyticsEventNameTransformFlip: string;

declare var PESDKAnalyticsEventNameTransformRotate: string;

declare var PESDKAnalyticsEventNameTransformStraightenAngleChange: string;

declare var PESDKAnalyticsScreenViewNameAdjust: string;

declare var PESDKAnalyticsScreenViewNameBrush: string;

declare var PESDKAnalyticsScreenViewNameBrushColor: string;

declare var PESDKAnalyticsScreenViewNameCamera: string;

declare var PESDKAnalyticsScreenViewNameEditor: string;

declare var PESDKAnalyticsScreenViewNameFilter: string;

declare var PESDKAnalyticsScreenViewNameFocus: string;

declare var PESDKAnalyticsScreenViewNameFrame: string;

declare var PESDKAnalyticsScreenViewNameOverlay: string;

declare var PESDKAnalyticsScreenViewNameSticker: string;

declare var PESDKAnalyticsScreenViewNameStickerAdd: string;

declare var PESDKAnalyticsScreenViewNameStickerColor: string;

declare var PESDKAnalyticsScreenViewNameText: string;

declare var PESDKAnalyticsScreenViewNameTextAdd: string;

declare var PESDKAnalyticsScreenViewNameTextBackgroundColor: string;

declare var PESDKAnalyticsScreenViewNameTextDesign: string;

declare var PESDKAnalyticsScreenViewNameTextFont: string;

declare var PESDKAnalyticsScreenViewNameTextFontColor: string;

declare var PESDKAnalyticsScreenViewNameTransform: string;

declare class PESDKAnimationDelegate extends NSObject implements CAAnimationDelegate {

	static alloc(): PESDKAnimationDelegate; // inherited from NSObject

	static new(): PESDKAnimationDelegate; // inherited from NSObject

	readonly block: (p1: boolean) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animationDidStart(anim: CAAnimation): void;

	animationDidStopFinished(anim: CAAnimation, flag: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PESDKAssetCatalog extends NSObject {

	static alloc(): PESDKAssetCatalog; // inherited from NSObject

	static new(): PESDKAssetCatalog; // inherited from NSObject

	effects: NSArray<PESDKEffect>;

	fonts: NSArray<PESDKFont>;

	frames: NSArray<PESDKFrame>;

	readonly isShared: boolean;

	overlays: NSArray<PESDKOverlay>;

	stickers: NSArray<PESDKStickerCategory>;

	textDesigns: NSArray<PESDKTextDesign>;

	static readonly defaultItems: PESDKAssetCatalog;

	static readonly shared: PESDKAssetCatalog;

	static readonly sharedItems: PESDKAssetCatalog;

	constructor(o: { stickers: NSArray<PESDKStickerCategory> | PESDKStickerCategory[]; frames: NSArray<PESDKFrame> | PESDKFrame[]; effects: NSArray<PESDKEffect> | PESDKEffect[]; overlays: NSArray<PESDKOverlay> | PESDKOverlay[]; fonts: NSArray<PESDKFont> | PESDKFont[]; textDesigns: NSArray<PESDKTextDesign> | PESDKTextDesign[]; });

	effectWithIdentifier(identifier: string): PESDKEffect;

	fontWithIdentifier(identifier: string): PESDKFont;

	frameWithIdentifier(identifier: string): PESDKFrame;

	initWithStickersFramesEffectsOverlaysFontsTextDesigns(stickers: NSArray<PESDKStickerCategory> | PESDKStickerCategory[], frames: NSArray<PESDKFrame> | PESDKFrame[], effects: NSArray<PESDKEffect> | PESDKEffect[], overlays: NSArray<PESDKOverlay> | PESDKOverlay[], fonts: NSArray<PESDKFont> | PESDKFont[], textDesigns: NSArray<PESDKTextDesign> | PESDKTextDesign[]): this;

	overlayWithIdentifier(identifier: string): PESDKOverlay;

	removeTemporaryItems(): void;

	removeTemporaryItemsWithRemoveEmptyCategories(removeEmptyCategories: boolean): void;

	stickerWithIdentifier(identifier: string): PESDKSticker;

	textDesignWithIdentifier(identifier: string): PESDKTextDesign;
}

declare class PESDKAssetManager extends NSObject {

	static alloc(): PESDKAssetManager; // inherited from NSObject

	static new(): PESDKAssetManager; // inherited from NSObject

	progressClosure: (p1: boolean) => void;

	getImageAtCompletion(url: NSURL, completion: (p1: UIImage, p2: NSError) => void): void;

	getImagesAtCompletion(urls: NSArray<NSURL> | NSURL[], completion: (p1: NSDictionary<NSURL, UIImage>, p2: NSArray<NSError>) => void): void;

	imageAssetForIdentifier(identifier: string): PESDKImageAsset;

	setImageAssetForIdentifier(imageAsset: PESDKImageAsset, identifier: string): void;
}

declare const enum PESDKBlendMode {

	Normal = 0,

	Overlay = 1,

	SoftLight = 2,

	HardLight = 3,

	Multiply = 4,

	Darken = 5,

	ColorBurn = 6,

	Screen = 7,

	Lighten = 8
}

declare class PESDKBlendModeCollectionViewCell extends UICollectionViewCell {

	static alloc(): PESDKBlendModeCollectionViewCell; // inherited from NSObject

	static appearance(): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBlendModeCollectionViewCell; // inherited from UIAppearance

	static new(): PESDKBlendModeCollectionViewCell; // inherited from NSObject

	readonly blendModeLabel: UILabel;
}

declare class PESDKBlendModeMenuItem extends NSObject {

	static alloc(): PESDKBlendModeMenuItem; // inherited from NSObject

	static new(): PESDKBlendModeMenuItem; // inherited from NSObject

	readonly blendMode: PESDKBlendMode;

	readonly title: string;

	constructor(o: { blendMode: PESDKBlendMode; });

	initWithBlendMode(blendMode: PESDKBlendMode): this;
}

declare const enum PESDKBlurQuality {

	Low = 0,

	High = 1
}

declare class PESDKBoxGradientView extends PESDKFocusGradientView {

	static alloc(): PESDKBoxGradientView; // inherited from NSObject

	static appearance(): PESDKBoxGradientView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKBoxGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKBoxGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBoxGradientView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKBoxGradientView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBoxGradientView; // inherited from UIAppearance

	static new(): PESDKBoxGradientView; // inherited from NSObject
}

declare class PESDKBrush extends NSObject implements PESDKGeneratorDelegate {

	static alloc(): PESDKBrush; // inherited from NSObject

	static new(): PESDKBrush; // inherited from NSObject

	generatorDidChange(generator: PESDKStampGenerator): void;
}

declare class PESDKBrushColorToolControllerOptions extends PESDKColorToolControllerOptions {

	static alloc(): PESDKBrushColorToolControllerOptions; // inherited from NSObject

	static new(): PESDKBrushColorToolControllerOptions; // inherited from NSObject

	constructor(o: { brushBuilder: PESDKBrushColorToolControllerOptionsBuilder; });

	initWithBrushBuilder(brushBuilder: PESDKBrushColorToolControllerOptionsBuilder): this;
}

declare class PESDKBrushColorToolControllerOptionsBuilder extends PESDKColorToolControllerOptionsBuilder {

	static alloc(): PESDKBrushColorToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKBrushColorToolControllerOptionsBuilder; // inherited from NSObject

	constructor(o: { brushOptions: PESDKBrushColorToolControllerOptions; });

	initWithBrushOptions(brushOptions: PESDKBrushColorToolControllerOptions): this;
}

declare class PESDKBrushEditController extends PESDKViewController {

	static alloc(): PESDKBrushEditController; // inherited from NSObject

	static new(): PESDKBrushEditController; // inherited from NSObject

	boxedPhotoEditModel: PESDKPhotoEditModel;

	readonly brushPreviewView: PESDKBrushPreviewView;

	color: UIColor;

	delegate: PESDKBrushEditControllerDelegate;

	hardness: number;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	size: number;

	sliderChangedValueClosure: (p1: PESDKSlider, p2: BrushTool) => void;

	readonly wantsVideoPlayback: boolean;
}

interface PESDKBrushEditControllerDelegate {

	brushEditControllerDidChangePreferredPreviewViewInsetsAnimated(brushEditController: PESDKBrushEditController, animated: boolean): void;

	brushEditControllerDidEndSliding(brushEditController: PESDKBrushEditController): void;

	brushEditControllerDidStartSliding(brushEditController: PESDKBrushEditController): void;

	brushEditControllerDidUpdateToHardness(brushEditController: PESDKBrushEditController, hardness: number): void;

	brushEditControllerDidUpdateToSize(brushEditController: PESDKBrushEditController, size: number): void;

	brushEditControllerPhotoEditModelDidChange(brushEditController: PESDKBrushEditController): void;

	brushEditControllerSpriteViewController(brushEditController: PESDKBrushEditController): PESDKSpriteViewController;

	brushEditControllerTargetScrollView(brushEditController: PESDKBrushEditController): UIScrollView;
}
declare var PESDKBrushEditControllerDelegate: {

	prototype: PESDKBrushEditControllerDelegate;
};

declare class PESDKBrushListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKBrushListSectionController; // inherited from NSObject

	static new(): PESDKBrushListSectionController; // inherited from NSObject
}

declare class PESDKBrushMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKBrushMenuItem; // inherited from NSObject

	static new(): PESDKBrushMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly brushTool: BrushTool;

	readonly icon: UIImage;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { brushTool: BrushTool; icon: UIImage; });

	initWithBrushToolIcon(brushTool: BrushTool, icon: UIImage): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKBrushPreviewView extends UIVisualEffectView {

	static alloc(): PESDKBrushPreviewView; // inherited from NSObject

	static appearance(): PESDKBrushPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKBrushPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKBrushPreviewView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBrushPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKBrushPreviewView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKBrushPreviewView; // inherited from UIAppearance

	static new(): PESDKBrushPreviewView; // inherited from NSObject

	color: UIColor;

	hardness: number;

	readonly imageView: UIImageView;

	width: number;
}

declare class PESDKBrushSpriteModel extends PESDKSpriteModel {

	static alloc(): PESDKBrushSpriteModel; // inherited from NSObject

	static new(): PESDKBrushSpriteModel; // inherited from NSObject

	paths: NSArray<PESDKPathModel>;

	readonly uuid: NSUUID;
}

declare class PESDKBrushToolController extends PESDKMenuToolController implements PESDKBrushEditControllerDelegate {

	static alloc(): PESDKBrushToolController; // inherited from NSObject

	static new(): PESDKBrushToolController; // inherited from NSObject

	readonly brushEditController: PESDKBrushEditController;

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly undoButton: PESDKOverlayButton;

	brushEditControllerDidChangePreferredPreviewViewInsetsAnimated(brushEditController: PESDKBrushEditController, animated: boolean): void;

	brushEditControllerDidEndSliding(brushEditController: PESDKBrushEditController): void;

	brushEditControllerDidStartSliding(brushEditController: PESDKBrushEditController): void;

	brushEditControllerDidUpdateToHardness(brushEditController: PESDKBrushEditController, hardness: number): void;

	brushEditControllerDidUpdateToSize(brushEditController: PESDKBrushEditController, size: number): void;

	brushEditControllerPhotoEditModelDidChange(brushEditController: PESDKBrushEditController): void;

	brushEditControllerSpriteViewController(brushEditController: PESDKBrushEditController): PESDKSpriteViewController;

	brushEditControllerTargetScrollView(brushEditController: PESDKBrushEditController): UIScrollView;
}

declare class PESDKBrushToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKBrushToolControllerOptions; // inherited from NSObject

	static new(): PESDKBrushToolControllerOptions; // inherited from NSObject

	readonly brushActionSelectedClosure: (p1: BrushOverlayAction) => void;

	readonly brushToolButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: BrushTool) => void;

	readonly brushToolSelectedClosure: (p1: BrushTool) => void;

	readonly defaultBrushColor: UIColor;

	readonly defaultBrushHardness: number;

	readonly maximumBrushHardness: number;

	readonly minimumBrushHardness: number;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: BrushOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly sliderChangedValueClosure: (p1: PESDKSlider, p2: BrushTool) => void;

	readonly sliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly sliderContainerConfigurationClosure: (p1: UIView) => void;

	readonly usesUniformHardness: boolean;

	constructor(o: { builder: PESDKBrushToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKBrushToolControllerOptionsBuilder): this;
}

declare class PESDKBrushToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKBrushToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKBrushToolControllerOptionsBuilder; // inherited from NSObject

	allowedBrushOverlayActions: NSArray<number>;

	allowedBrushTools: NSArray<number>;

	brushActionSelectedClosure: (p1: BrushOverlayAction) => void;

	brushToolButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: BrushTool) => void;

	brushToolSelectedClosure: (p1: BrushTool) => void;

	defaultBrushColor: UIColor;

	defaultBrushHardness: number;

	defaultBrushSize: PESDKFloatValue;

	maximumBrushHardness: number;

	maximumBrushSize: PESDKFloatValue;

	minimumBrushHardness: number;

	minimumBrushSize: PESDKFloatValue;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: BrushOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	sliderChangedValueClosure: (p1: PESDKSlider, p2: BrushTool) => void;

	sliderConfigurationClosure: (p1: PESDKSlider) => void;

	sliderContainerConfigurationClosure: (p1: UIView) => void;

	usesUniformHardness: boolean;

	constructor(o: { options: PESDKBrushToolControllerOptions; });

	initWithOptions(options: PESDKBrushToolControllerOptions): this;
}

declare class PESDKButton extends UIButton {

	static alloc(): PESDKButton; // inherited from NSObject

	static appearance(): PESDKButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PESDKButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): PESDKButton; // inherited from UIButton

	static new(): PESDKButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): PESDKButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): PESDKButton; // inherited from UIButton

	actionClosure: (p1: any) => void;

	touchAreaInsets: UIEdgeInsets;

	setActionClosureFor(actionClosure: (p1: any) => void, controlEvents: UIControlEvents): void;
}

declare class PESDKCameraController extends NSObject implements CLLocationManagerDelegate {

	static alloc(): PESDKCameraController; // inherited from NSObject

	static new(): PESDKCameraController; // inherited from NSObject

	assetWriterConfigurationClosure: (p1: AVAssetWriter) => void;

	audioOutputSettings: NSDictionary<string, any>;

	authorizationFailedHandler: () => void;

	availableCameraPositionsChangedHandler: () => void;

	cameraPositionChangedHandler: (p1: AVCaptureDevicePosition, p2: AVCaptureDevicePosition) => void;

	cameraPositions: NSArray<number>;

	capturingStillImageHandler: (p1: boolean) => void;

	effect: PESDKEffect;

	effectIntensity: number;

	flashChangedHandler: (p1: boolean, p2: AVCaptureFlashMode, p3: boolean) => void;

	flashModes: NSArray<number>;

	focusDisabledHandler: () => void;

	focusModeChangedHandler: (p1: AVCaptureFocusMode, p2: AVCaptureExposureMode) => void;

	focusPointChangedHandler: (p1: CGPoint) => void;

	includeEffectInOutput: boolean;

	includeUserLocation: boolean;

	locationAccessRequestClosure: (p1: CLLocationManager) => void;

	previewFrameChangedHandler: (p1: CGRect) => void;

	recordingMode: RecordingMode;

	recordingModeChangedHandler: (p1: RecordingMode) => void;

	runningStateChangedHandler: (p1: boolean) => void;

	sessionInterruptionHandler: (p1: boolean) => void;

	sessionRuntimeErrorHandler: (p1: NSError) => void;

	tapToFocusEnabled: boolean;

	torchChangedHandler: (p1: boolean, p2: AVCaptureTorchMode, p3: boolean) => void;

	torchModes: NSArray<number>;

	videoOutputSettings: NSDictionary<string, any>;

	readonly videoPreviewView: UIView;

	readonly videoPreviewViewContainer: UIView;

	videoRecordingFailedHandler: () => void;

	videoRecordingFileExtension: string;

	videoRecordingFileType: string;

	videoRecordingFinishedHandler: (p1: NSURL) => void;

	videoRecordingProgressHandler: (p1: number) => void;

	videoRecordingStartedHandler: () => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorization(manager: CLLocationManager): void;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailRangingBeaconsForConstraintError(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], region: CLBeaconRegion): void;

	locationManagerDidRangeBeaconsSatisfyingConstraint(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], beaconConstraint: CLBeaconIdentityConstraint): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectNextLightMode(): void;

	self(): this;

	setupWithInitialRecordingModeCompletionError(recordingMode: RecordingMode, completion: () => void): boolean;

	setupWithInitialRecordingModeError(recordingMode: RecordingMode): boolean;

	startCamera(): void;

	startVideoRecording(): void;

	stopCamera(): void;

	stopVideoRecording(): void;

	switchToCameraAtPosition(position: AVCaptureDevicePosition): void;

	takePhoto(completion: (p1: UIImage, p2: NSError) => void): void;

	takePhotoAndReturnData(completion: (p1: NSData, p2: NSError) => void): void;

	toggleCameraPosition(): void;

	zoomWithDesiredZoomFactor(zoomFactor: number): void;
}

declare class PESDKCameraViewController extends UIViewController implements UIGestureRecognizerDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): PESDKCameraViewController; // inherited from NSObject

	static new(): PESDKCameraViewController; // inherited from NSObject

	readonly actionButton: UIControl;

	readonly actionButtonContainer: UIView;

	readonly backgroundContainerView: UIView;

	readonly bottomControlsView: UIView;

	readonly bottomSafeAreaHidingView: UIView;

	readonly cameraController: PESDKCameraController;

	readonly cameraPreviewContainer: UIView;

	readonly cameraRollButton: PESDKButton;

	cancelBlock: () => void;

	readonly cancelButton: PESDKButton;

	completionBlock: (p1: UIImage, p2: NSURL) => void;

	dataCompletionBlock: (p1: NSData) => void;

	readonly filterIntensitySlider: PESDKSlider;

	readonly filterSelectionButton: PESDKButton;

	readonly filterSelectionController: PESDKFilterSelectionController;

	readonly flashButton: PESDKButton;

	locationAccessRequestClosure: (p1: CLLocationManager) => void;

	readonly photoEditModel: PESDKPhotoEditModel;

	readonly pinchGestureRecognizer: UIPinchGestureRecognizer;

	readonly recordingTimeLabel: UILabel;

	readonly swipeLeftGestureRecognizer: UISwipeGestureRecognizer;

	readonly swipeRightGestureRecognizer: UISwipeGestureRecognizer;

	readonly switchCameraButton: PESDKButton;

	readonly topControlsView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: PESDKConfiguration; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	initWithConfiguration(configuration: PESDKConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	recordVideo(sender: PESDKVideoRecordButton): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setLastImageFromRollAsPreview(): void;

	takePhoto(sender: PESDKButton): void;
}

declare class PESDKCameraViewControllerOptions extends NSObject {

	static alloc(): PESDKCameraViewControllerOptions; // inherited from NSObject

	static new(): PESDKCameraViewControllerOptions; // inherited from NSObject

	readonly assetWriterConfigurationClosure: (p1: AVAssetWriter) => void;

	readonly audioOutputSettings: NSDictionary<string, any>;

	readonly backgroundColor: UIColor;

	readonly cameraRollButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly cancelButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly cropToSquare: boolean;

	readonly filterIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly filterSelectorButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly flashButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly includeUserLocation: boolean;

	readonly initialFilterIntensity: number;

	readonly maximumVideoLength: number;

	readonly photoActionButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly recordingModeButtonConfigurationClosure: (p1: PESDKButton, p2: RecordingMode) => void;

	readonly showCameraRoll: boolean;

	readonly showCancelButton: boolean;

	readonly showFilterIntensitySlider: boolean;

	readonly showFilters: boolean;

	readonly switchCameraButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly tapToFocusEnabled: boolean;

	readonly timeLabelConfigurationClosure: (p1: UILabel) => void;

	readonly videoOutputSettings: NSDictionary<string, any>;

	readonly videoRecordingFileExtension: string;

	readonly videoRecordingFileType: string;

	readonly writeVideoWithFilterApplied: boolean;
}

declare class PESDKCameraViewControllerOptionsBuilder extends NSObject {

	static alloc(): PESDKCameraViewControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKCameraViewControllerOptionsBuilder; // inherited from NSObject

	allowedCameraPositions: NSArray<number>;

	allowedFlashModes: NSArray<number>;

	allowedRecordingModes: NSArray<number>;

	allowedRecordingOrientations: NSArray<number>;

	allowedTorchModes: NSArray<number>;

	assetWriterConfigurationClosure: (p1: AVAssetWriter) => void;

	audioOutputSettings: NSDictionary<string, any>;

	backgroundColor: UIColor;

	cameraRollButtonConfigurationClosure: (p1: PESDKButton) => void;

	cancelButtonConfigurationClosure: (p1: PESDKButton) => void;

	cropToSquare: boolean;

	filterIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	filterSelectorButtonConfigurationClosure: (p1: PESDKButton) => void;

	flashButtonConfigurationClosure: (p1: PESDKButton) => void;

	includeUserLocation: boolean;

	initialFilterIntensity: number;

	maximumVideoLength: number;

	photoActionButtonConfigurationClosure: (p1: PESDKButton) => void;

	recordingModeButtonConfigurationClosure: (p1: PESDKButton, p2: RecordingMode) => void;

	showCameraRoll: boolean;

	showCancelButton: boolean;

	showFilterIntensitySlider: boolean;

	showFilters: boolean;

	switchCameraButtonConfigurationClosure: (p1: PESDKButton) => void;

	tapToFocusEnabled: boolean;

	timeLabelConfigurationClosure: (p1: UILabel) => void;

	videoOutputSettings: NSDictionary<string, any>;

	videoRecordingFileExtension: string;

	videoRecordingFileType: string;

	writeVideoWithFilterApplied: boolean;
}

declare class PESDKCanvasView extends GLKView {

	static alloc(): PESDKCanvasView; // inherited from NSObject

	static appearance(): PESDKCanvasView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCanvasView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCanvasView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCanvasView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCanvasView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCanvasView; // inherited from UIAppearance

	static new(): PESDKCanvasView; // inherited from NSObject

	activeTool: PESDKTool;

	readonly currentlyPainting: boolean;

	dataSource: PESDKCanvasViewDataSource;

	readonly painting: PESDKPainting;

	readonly uuid: NSUUID;

	constructor(o: { painting: PESDKPainting; activeTool: PESDKTool; uuid: NSUUID; frame: CGRect; });

	convertPointToDocument(pt: CGPoint): CGPoint;

	handlePan(gestureRecognizer: UIGestureRecognizer): void;

	initWithPaintingActiveToolUuidFrame(painting: PESDKPainting, activeTool: PESDKTool, uuid: NSUUID, frame: CGRect): this;
}

interface PESDKCanvasViewDataSource {

	canvasViewAppliedOrientation(canvasView: PESDKCanvasView): PESDKOrientation;

	canvasViewImageInsets(canvasView: PESDKCanvasView): UIEdgeInsets;

	canvasViewNormalizedCropRect(canvasView: PESDKCanvasView): CGRect;

	canvasViewOutputImageSize(canvasView: PESDKCanvasView): CGSize;

	canvasViewStraightenAngle(canvasView: PESDKCanvasView): number;
}
declare var PESDKCanvasViewDataSource: {

	prototype: PESDKCanvasViewDataSource;
};

declare class PESDKCircleGradientView extends PESDKFocusGradientView {

	static alloc(): PESDKCircleGradientView; // inherited from NSObject

	static appearance(): PESDKCircleGradientView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCircleGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCircleGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCircleGradientView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCircleGradientView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCircleGradientView; // inherited from UIAppearance

	static new(): PESDKCircleGradientView; // inherited from NSObject
}

declare class PESDKClarityFilter extends CIFilter {

	static alloc(): PESDKClarityFilter; // inherited from NSObject

	static new(): PESDKClarityFilter; // inherited from NSObject

	inputImage: CIImage;

	inputIntensity: number;
}

declare class PESDKColor extends NSObject {

	static alloc(): PESDKColor; // inherited from NSObject

	static new(): PESDKColor; // inherited from NSObject

	readonly color: UIColor;

	readonly colorName: string;

	constructor(o: { color: UIColor; colorName: string; });

	initWithColorColorName(color: UIColor, colorName: string): this;
}

declare class PESDKColorCollectionView extends UIView implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): PESDKColorCollectionView; // inherited from NSObject

	static appearance(): PESDKColorCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKColorCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKColorCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKColorCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorCollectionView; // inherited from UIAppearance

	static new(): PESDKColorCollectionView; // inherited from NSObject

	colorPalette: PESDKColorPalette;

	delegate: PESDKColorCollectionViewDelegate;

	readonly selectedColor: PESDKColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { colorPalette: PESDKColorPalette; });

	class(): typeof NSObject;

	collectionViewCanEditItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewContextMenuConfigurationForItemAtIndexPathPoint(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidEndMultipleSelectionInteraction(collectionView: UICollectionView): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewPreviewForDismissingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewPreviewForHighlightingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplayContextMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewWillEndContextMenuInteractionWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithColorPalette(colorPalette: PESDKColorPalette): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	selectColorAtIndexAnimated(index: number, animated: boolean): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PESDKColorCollectionViewCell extends UICollectionViewCell {

	static alloc(): PESDKColorCollectionViewCell; // inherited from NSObject

	static appearance(): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorCollectionViewCell; // inherited from UIAppearance

	static new(): PESDKColorCollectionViewCell; // inherited from NSObject

	readonly colorView: UIView;

	readonly iconView: UIImageView;

	readonly imageView: UIImageView;

	isActive: boolean;

	shadowColor: UIColor;
}

interface PESDKColorCollectionViewDelegate {

	colorCollectionViewDidSelectColor(colorCollectionView: PESDKColorCollectionView, color: PESDKColor): void;
}
declare var PESDKColorCollectionViewDelegate: {

	prototype: PESDKColorCollectionViewDelegate;
};

declare class PESDKColorListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKColorListSectionController; // inherited from NSObject

	static new(): PESDKColorListSectionController; // inherited from NSObject
}

declare class PESDKColorMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKColorMenuItem; // inherited from NSObject

	static new(): PESDKColorMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly color: UIColor;

	readonly colorName: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { color: UIColor; colorName: string; });

	initWithColorColorName(color: UIColor, colorName: string): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKColorPalette extends NSObject {

	static alloc(): PESDKColorPalette; // inherited from NSObject

	static new(): PESDKColorPalette; // inherited from NSObject

	readonly colors: NSArray<PESDKColor>;

	constructor(o: { colors: NSArray<PESDKColor> | PESDKColor[]; });

	initWithColors(colors: NSArray<PESDKColor> | PESDKColor[]): this;
}

declare class PESDKColorPickerView extends UIControl {

	static alloc(): PESDKColorPickerView; // inherited from NSObject

	static appearance(): PESDKColorPickerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKColorPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKColorPickerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPickerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKColorPickerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPickerView; // inherited from UIAppearance

	static new(): PESDKColorPickerView; // inherited from NSObject

	color: UIColor;
}

declare class PESDKColorPipette extends PESDKColor {

	static alloc(): PESDKColorPipette; // inherited from NSObject

	static new(): PESDKColorPipette; // inherited from NSObject
}

declare class PESDKColorPipetteMenuItem extends PESDKColorMenuItem {

	static alloc(): PESDKColorPipetteMenuItem; // inherited from NSObject

	static new(): PESDKColorPipetteMenuItem; // inherited from NSObject
}

declare class PESDKColorPipetteOverlayView extends UIView {

	static alloc(): PESDKColorPipetteOverlayView; // inherited from NSObject

	static appearance(): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPipetteOverlayView; // inherited from UIAppearance

	static new(): PESDKColorPipetteOverlayView; // inherited from NSObject

	pickedColor: UIColor;
}

declare class PESDKColorPipetteView extends UIView implements GLKViewDelegate, MTKViewDelegate {

	static alloc(): PESDKColorPipetteView; // inherited from NSObject

	static appearance(): PESDKColorPipetteView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKColorPipetteView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKColorPipetteView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPipetteView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKColorPipetteView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKColorPipetteView; // inherited from UIAppearance

	static new(): PESDKColorPipetteView; // inherited from NSObject

	delegate: PESDKColorPipetteViewDelegate;

	magnificationScale: number;

	readonly magnificationView: UIView;

	readonly overlayView: PESDKColorPipetteOverlayView;

	previewController: PESDKMediaEditPreviewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	drawInMTKView(view: MTKView): void;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface PESDKColorPipetteViewDelegate {

	colorPipetteViewDidPickAt(colorPipetteView: PESDKColorPipetteView, newColor: boolean, color: UIColor, normalizedPosition: CGPoint): void;
}
declare var PESDKColorPipetteViewDelegate: {

	prototype: PESDKColorPipetteViewDelegate;
};

declare class PESDKColorToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKColorToolControllerOptions; // inherited from NSObject

	static new(): PESDKColorToolControllerOptions; // inherited from NSObject

	readonly availableColors: NSArray<PESDKColor>;

	readonly colorActionButtonConfigurationClosure: (p1: PESDKColorCollectionViewCell, p2: UIColor, p3: string) => void;

	readonly colorActionSelectedClosure: (p1: UIColor, p2: string) => void;

	constructor(o: { builder: PESDKColorToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKColorToolControllerOptionsBuilder): this;
}

declare class PESDKColorToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKColorToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKColorToolControllerOptionsBuilder; // inherited from NSObject

	availableColors: NSArray<PESDKColor>;

	colorActionButtonConfigurationClosure: (p1: PESDKColorCollectionViewCell, p2: UIColor, p3: string) => void;

	colorActionSelectedClosure: (p1: UIColor, p2: string) => void;

	constructor(o: { options: PESDKColorToolControllerOptions; });

	initWithOptions(options: PESDKColorToolControllerOptions): this;
}

declare class PESDKColorizeFilter extends CIFilter {

	static alloc(): PESDKColorizeFilter; // inherited from NSObject

	static new(): PESDKColorizeFilter; // inherited from NSObject

	inputColor: UIColor;

	inputImage: CIImage;
}

declare class PESDKConfiguration extends NSObject {

	static alloc(): PESDKConfiguration; // inherited from NSObject

	static new(): PESDKConfiguration; // inherited from NSObject

	readonly adjustToolControllerOptions: PESDKAdjustToolControllerOptions;

	readonly assetCatalog: PESDKAssetCatalog;

	readonly brushColorToolControllerOptions: PESDKBrushColorToolControllerOptions;

	readonly brushToolControllerOptions: PESDKBrushToolControllerOptions;

	readonly cameraViewControllerOptions: PESDKCameraViewControllerOptions;

	readonly filterToolControllerOptions: PESDKFilterToolControllerOptions;

	readonly focusToolControllerOptions: PESDKFocusToolControllerOptions;

	readonly frameOptionsToolControllerOptions: PESDKFrameOptionsToolControllerOptions;

	readonly frameToolControllerOptions: PESDKFrameToolControllerOptions;

	readonly overlayToolControllerOptions: PESDKOverlayToolControllerOptions;

	readonly photoEditViewControllerOptions: PESDKPhotoEditViewControllerOptions;

	readonly snappingOptions: PESDKSnappingOptions;

	readonly stickerColorToolControllerOptions: PESDKColorToolControllerOptions;

	readonly stickerOptionsToolControllerOptions: PESDKStickerOptionsToolControllerOptions;

	readonly stickerToolControllerOptions: PESDKStickerToolControllerOptions;

	readonly textColorToolControllerOptions: PESDKTextColorToolControllerOptions;

	readonly textDesignOptionsToolControllerOptions: PESDKTextDesignOptionsToolControllerOptions;

	readonly textDesignToolControllerOptions: PESDKTextDesignToolControllerOptions;

	readonly textFontToolControllerOptions: PESDKTextFontToolControllerOptions;

	readonly textOptionsToolControllerOptions: IMGLTextOptionsToolControllerOptions;

	readonly textToolControllerOptions: PESDKTextToolControllerOptions;

	readonly transformToolControllerOptions: PESDKTransformToolControllerOptions;

	readonly trimToolControllerOptions: PESDKTrimToolControllerOptions;

	readonly videoEditViewControllerOptions: PESDKVideoEditViewControllerOptions;

	constructor(o: { builder: (p1: PESDKConfigurationBuilder) => void; });

	initWithBuilder(builder: (p1: PESDKConfigurationBuilder) => void): this;
}

declare class PESDKConfigurationBuilder extends NSObject {

	static alloc(): PESDKConfigurationBuilder; // inherited from NSObject

	static new(): PESDKConfigurationBuilder; // inherited from NSObject

	appearanceProxyConfigurationClosure: (p1: PESDKTheme) => void;

	assetCatalog: PESDKAssetCatalog;

	theme: PESDKTheme;

	addOptions(options: any): void;

	configureAdjustToolController(builder: (p1: PESDKAdjustToolControllerOptionsBuilder) => void): void;

	configureBrushColorToolController(builder: (p1: PESDKBrushColorToolControllerOptionsBuilder) => void): void;

	configureBrushToolController(builder: (p1: PESDKBrushToolControllerOptionsBuilder) => void): void;

	configureCameraViewController(builder: (p1: PESDKCameraViewControllerOptionsBuilder) => void): void;

	configureFilterToolController(builder: (p1: PESDKFilterToolControllerOptionsBuilder) => void): void;

	configureFocusToolController(builder: (p1: PESDKFocusToolControllerOptionsBuilder) => void): void;

	configureFrameOptionsToolController(builder: (p1: PESDKFrameOptionsToolControllerOptionsBuilder) => void): void;

	configureFrameToolController(builder: (p1: PESDKFrameToolControllerOptionsBuilder) => void): void;

	configureFromDataError(data: NSData): boolean;

	configureFromDictionaryError(dictionary: NSDictionary<string, any>): boolean;

	configureOverlayToolController(builder: (p1: PESDKOverlayToolControllerOptionsBuilder) => void): void;

	configurePhotoEditViewController(builder: (p1: PESDKPhotoEditViewControllerOptionsBuilder) => void): void;

	configureSnapping(builder: (p1: PESDKSnappingOptionsOptionsBuilder) => void): void;

	configureStickerColorToolController(builder: (p1: PESDKColorToolControllerOptionsBuilder) => void): void;

	configureStickerOptionsToolController(builder: (p1: PESDKStickerOptionsToolControllerOptionsBuilder) => void): void;

	configureStickerToolController(builder: (p1: PESDKStickerToolControllerOptionsBuilder) => void): void;

	configureTextColorToolController(builder: (p1: PESDKTextColorToolControllerOptionsBuilder) => void): void;

	configureTextDesignOptionsToolController(builder: (p1: PESDKTextDesignOptionsToolControllerOptionsBuilder) => void): void;

	configureTextDesignToolController(builder: (p1: PESDKTextDesignToolControllerOptionsBuilder) => void): void;

	configureTextFontToolController(builder: (p1: PESDKTextFontToolControllerOptionsBuilder) => void): void;

	configureTextOptionsToolController(builder: (p1: PESDKTextOptionsToolControllerOptionsBuilder) => void): void;

	configureTextToolController(builder: (p1: PESDKTextToolControllerOptionsBuilder) => void): void;

	configureTransformToolController(builder: (p1: PESDKTransformToolControllerOptionsBuilder) => void): void;

	configureTrimToolController(builder: (p1: PESDKTrimToolControllerOptionsBuilder) => void): void;

	configureVideoEditViewController(builder: (p1: PESDKVideoEditViewControllerOptionsBuilder) => void): void;

	transformToolControllerOptions(builder: (p1: PESDKTransformToolControllerOptionsBuilder) => void): void;
}

declare class PESDKConfigurationSerializationConfiguration extends NSObject {

	static alloc(): PESDKConfigurationSerializationConfiguration; // inherited from NSObject

	static new(): PESDKConfigurationSerializationConfiguration; // inherited from NSObject
}

declare class PESDKCoreImageEffect extends PESDKEffect {

	static alloc(): PESDKCoreImageEffect; // inherited from NSObject

	static new(): PESDKCoreImageEffect; // inherited from NSObject

	readonly ciFilterName: string;

	readonly options: NSDictionary<string, any>;

	constructor(o: { identifier: string; ciFilterName: string; displayName: string; options: NSDictionary<string, any>; });

	initWithIdentifierCiFilterNameDisplayNameOptions(identifier: string, filterName: string, displayName: string, options: NSDictionary<string, any>): this;
}

declare class PESDKCropAndStraightenView extends UIView implements GLKViewDelegate, MTKViewDelegate, UIGestureRecognizerDelegate, UIScrollViewDelegate {

	static alloc(): PESDKCropAndStraightenView; // inherited from NSObject

	static appearance(): PESDKCropAndStraightenView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCropAndStraightenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCropAndStraightenView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropAndStraightenView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCropAndStraightenView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropAndStraightenView; // inherited from UIAppearance

	static new(): PESDKCropAndStraightenView; // inherited from NSObject

	canvasFrame: CGRect;

	cropRect: CGRect;

	delegate: PESDKCropAndStraightenViewDelegate;

	image: UIImage;

	readonly imageCropRect: CGRect;

	readonly isDecelerating: boolean;

	readonly isTracking: boolean;

	orientation: PESDKOrientation;

	spriteContainerView: PESDKSpriteContainerView;

	straightenAngle: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	drawInMTKView(view: MTKView): void;

	fitImageRegionInCropRectAnimated(imageRegion: CGRect, animated: boolean): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	imageCropRectForViewRect(viewRect: CGRect): CGRect;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PESDKCropAndStraightenViewDelegate {

	cropAndStraightenViewDidEndTracking(cropAndStraightenView: PESDKCropAndStraightenView): void;

	cropAndStraightenViewDidTrack(cropAndStraightenView: PESDKCropAndStraightenView): void;

	cropAndStraightenViewWillBeginTracking(cropAndStraightenView: PESDKCropAndStraightenView): void;
}
declare var PESDKCropAndStraightenViewDelegate: {

	prototype: PESDKCropAndStraightenViewDelegate;
};

declare class PESDKCropAspect extends NSObject {

	static alloc(): PESDKCropAspect; // inherited from NSObject

	static new(): PESDKCropAspect; // inherited from NSObject

	readonly height: number;

	readonly inversed: PESDKCropAspect;

	readonly isRotatable: boolean;

	readonly localizedName: string;

	readonly ratio: number;

	readonly width: number;

	constructor(o: { width: number; height: number; });

	constructor(o: { width: number; height: number; localizedName: string; });

	constructor(o: { width: number; height: number; localizedName: string; rotatable: boolean; });

	constructor(o: { width: number; height: number; rotatable: boolean; });

	heightForWidth(width: number): number;

	initWithWidthHeight(width: number, height: number): this;

	initWithWidthHeightLocalizedName(width: number, height: number, localizedName: string): this;

	initWithWidthHeightLocalizedNameRotatable(width: number, height: number, localizedName: string, rotatable: boolean): this;

	initWithWidthHeightRotatable(width: number, height: number, rotatable: boolean): this;

	widthForHeight(height: number): number;
}

declare class PESDKCropAspectListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKCropAspectListSectionController; // inherited from NSObject

	static new(): PESDKCropAspectListSectionController; // inherited from NSObject
}

declare class PESDKCropAspectMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKCropAspectMenuItem; // inherited from NSObject

	static new(): PESDKCropAspectMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly cropAspect: PESDKCropAspect;

	readonly resetsTransform: boolean;

	readonly rotatable: boolean;

	readonly title: string;

	static readonly resetItem: PESDKCropAspectMenuItem;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { cropAspect: PESDKCropAspect; });

	constructor(o: { title: string; });

	initWithCropAspect(cropAspect: PESDKCropAspect): this;

	initWithTitle(title: string): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKCropHandleView extends UIView {

	static alloc(): PESDKCropHandleView; // inherited from NSObject

	static appearance(): PESDKCropHandleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCropHandleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCropHandleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropHandleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCropHandleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropHandleView; // inherited from UIAppearance

	static new(): PESDKCropHandleView; // inherited from NSObject

	readonly isBottom: boolean;

	readonly isCorner: boolean;

	readonly isLateral: boolean;

	readonly isLeft: boolean;

	isLineWeightHeavy: boolean;

	readonly isRight: boolean;

	readonly isTop: boolean;
}

declare class PESDKCropMaskView extends UIView {

	static alloc(): PESDKCropMaskView; // inherited from NSObject

	static appearance(): PESDKCropMaskView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCropMaskView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCropMaskView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropMaskView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCropMaskView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropMaskView; // inherited from UIAppearance

	static new(): PESDKCropMaskView; // inherited from NSObject

	effect: UIVisualEffect;

	readonly effectView: UIVisualEffectView;
}

declare class PESDKCropOverlayView extends UIView {

	static alloc(): PESDKCropOverlayView; // inherited from NSObject

	static appearance(): PESDKCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKCropOverlayView; // inherited from UIAppearance

	static new(): PESDKCropOverlayView; // inherited from NSObject

	cropRect: CGRect;

	isCropGridVisible: boolean;

	isMaskedContentVisible: boolean;

	isStraightenGridVisible: boolean;

	setCropGridVisibleAnimated(visible: boolean, animated: boolean): void;

	setMaskedContentVisibleAnimated(visible: boolean, animated: boolean): void;

	setStraightenGridVisibleAnimated(visible: boolean, animated: boolean): void;
}

declare class PESDKCustomAdjustmentsFilter extends CIFilter {

	static alloc(): PESDKCustomAdjustmentsFilter; // inherited from NSObject

	static new(): PESDKCustomAdjustmentsFilter; // inherited from NSObject

	inputBlacks: number;

	inputBrightness: number;

	inputContrast: number;

	inputExposure: number;

	inputGamma: number;

	inputHighlights: number;

	inputImage: CIImage;

	inputSaturation: number;

	inputShadows: number;

	inputWhites: number;
}

declare class PESDKCustomPatchConfiguration extends NSObject {

	static alloc(): PESDKCustomPatchConfiguration; // inherited from NSObject

	static new(): PESDKCustomPatchConfiguration; // inherited from NSObject

	bottomImageGroup: PESDKFrameImageGroup;

	layoutMode: FrameLayoutMode;

	leftImageGroup: PESDKFrameImageGroup;

	rightImageGroup: PESDKFrameImageGroup;

	topImageGroup: PESDKFrameImageGroup;
}

declare class PESDKCustomPatchFrameBuilder extends NSObject implements PESDKFrameBuilderProtocol {

	static alloc(): PESDKCustomPatchFrameBuilder; // inherited from NSObject

	static new(): PESDKCustomPatchFrameBuilder; // inherited from NSObject

	constructor(o: { configuration: PESDKCustomPatchConfiguration; });

	buildWithSizeRelativeScaleCompletion(size: CGSize, relativeScale: number, completion: (p1: UIImage) => void): void;

	initWithConfiguration(configuration: PESDKCustomPatchConfiguration): this;
}

declare class PESDKDefaultDynamicFrames extends NSObject {

	static alloc(): PESDKDefaultDynamicFrames; // inherited from NSObject

	static new(): PESDKDefaultDynamicFrames; // inherited from NSObject

	static readonly artDecorFrameBuilder: PESDKCustomPatchFrameBuilder;

	static readonly blackPassepartoutFrameBuilder: PESDKCustomPatchFrameBuilder;

	static readonly diaFrameBuilder: PESDKCustomPatchFrameBuilder;

	static readonly woodPassepartoutFrameBuilder: PESDKCustomPatchFrameBuilder;
}

declare class PESDKDefaultLogger extends NSObject implements PESDKLoggerProtocol {

	static alloc(): PESDKDefaultLogger; // inherited from NSObject

	static new(): PESDKDefaultLogger; // inherited from NSObject

	debug(message: string): void;

	error(message: string): void;

	info(message: string): void;

	warn(message: string): void;
}

declare class PESDKDefaultProgressView extends NSObject implements PESDKProgressView {

	static alloc(): PESDKDefaultProgressView; // inherited from NSObject

	static new(): PESDKDefaultProgressView; // inherited from NSObject

	animationDuration: number;

	readonly backgroundView: UIView;

	readonly imageView: UIImageView;

	readonly label: UILabel;

	readonly overlayView: UIView;

	static readonly sharedView: PESDKDefaultProgressView;

	hide(): void;

	showWithMessage(message: string): void;
}

declare class PESDKDefaultToolbarItem extends PESDKToolbarItem {

	static alloc(): PESDKDefaultToolbarItem; // inherited from NSObject

	static new(): PESDKDefaultToolbarItem; // inherited from NSObject

	applyButton: PESDKToolbarButton;

	discardButton: PESDKToolbarButton;

	titleLabel: PESDKLabel;
}

declare class PESDKDeserializationResult extends NSObject {

	static alloc(): PESDKDeserializationResult; // inherited from NSObject

	static new(): PESDKDeserializationResult; // inherited from NSObject

	readonly model: PESDKPhotoEditModel;

	readonly photo: PESDKPhotoRepresentation;
}

declare class PESDKDeserializer extends NSObject {

	static alloc(): PESDKDeserializer; // inherited from NSObject

	static deserializeWithData(data: NSData): PESDKDeserializationResult;

	static deserializeWithDataAssetCatalog(data: NSData, assetCatalog: PESDKAssetCatalog): PESDKDeserializationResult;

	static deserializeWithDataImageDimensions(data: NSData, imageDimensions: CGSize): PESDKDeserializationResult;

	static deserializeWithDataImageDimensionsAssetCatalog(data: NSData, imageDimensions: CGSize, assetCatalog: PESDKAssetCatalog): PESDKDeserializationResult;

	static deserializeWithDataImageDimensionsExistingModel(data: NSData, imageDimensions: CGSize, existingModel: PESDKPhotoEditModel): PESDKDeserializationResult;

	static deserializeWithDataImageDimensionsExistingModelAssetCatalog(data: NSData, imageDimensions: CGSize, existingModel: PESDKPhotoEditModel, assetCatalog: PESDKAssetCatalog): PESDKDeserializationResult;

	static new(): PESDKDeserializer; // inherited from NSObject
}

declare class PESDKDeviceOrientationController extends NSObject {

	static alloc(): PESDKDeviceOrientationController; // inherited from NSObject

	static new(): PESDKDeviceOrientationController; // inherited from NSObject

	start(): void;

	stop(): void;
}

interface PESDKDiffable {

	diffIdentifier: NSObjectProtocol;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}
declare var PESDKDiffable: {

	prototype: PESDKDiffable;
};

declare class PESDKDimmedLabel extends PESDKLabel {

	static alloc(): PESDKDimmedLabel; // inherited from NSObject

	static appearance(): PESDKDimmedLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKDimmedLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKDimmedLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKDimmedLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKDimmedLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKDimmedLabel; // inherited from UIAppearance

	static new(): PESDKDimmedLabel; // inherited from NSObject
}

declare class PESDKDimmingView extends UIView {

	static alloc(): PESDKDimmingView; // inherited from NSObject

	static appearance(): PESDKDimmingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKDimmingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKDimmingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKDimmingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKDimmingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKDimmingView; // inherited from UIAppearance

	static new(): PESDKDimmingView; // inherited from NSObject
}

declare class PESDKDrawReturnValue extends NSObject {

	static alloc(): PESDKDrawReturnValue; // inherited from NSObject

	static new(): PESDKDrawReturnValue; // inherited from NSObject

	readonly colorSpace: any;

	readonly commandBuffer: MTLCommandBuffer;

	constructor(o: { commandBuffer: MTLCommandBuffer; colorSpace: any; });

	initWithCommandBufferColorSpace(commandBuffer: MTLCommandBuffer, colorSpace: any): this;
}

declare class PESDKDuoToneEffect extends PESDKEffect {

	static alloc(): PESDKDuoToneEffect; // inherited from NSObject

	static new(): PESDKDuoToneEffect; // inherited from NSObject

	readonly darkColor: UIColor;

	readonly lightColor: UIColor;

	constructor(o: { identifier: string; lightColor: UIColor; darkColor: UIColor; displayName: string; });

	initWithIdentifierLightColorDarkColorDisplayName(identifier: string, lightColor: UIColor, darkColor: UIColor, displayName: string): this;
}

declare class PESDKDuoToneFilter extends CIFilter {

	static alloc(): PESDKDuoToneFilter; // inherited from NSObject

	static new(): PESDKDuoToneFilter; // inherited from NSObject

	inputDarkColor: UIColor;

	inputImage: CIImage;

	inputIntensity: number;

	inputLightColor: UIColor;
}

declare class PESDKEffect extends NSObject {

	static alloc(): PESDKEffect; // inherited from NSObject

	static effectWithIdentifier(identifier: string): PESDKEffect;

	static new(): PESDKEffect; // inherited from NSObject

	static setAll(newValue: NSArray<PESDKEffect> | PESDKEffect[]): void;

	readonly displayName: string;

	readonly identifier: string;

	readonly newEffectFilter: CIFilter;

	static all: NSArray<PESDKEffect>;

	static readonly defaultItems: NSArray<PESDKEffect>;

	constructor(o: { identifier: string; displayName: string; });

	initWithIdentifierDisplayName(identifier: string, displayName: string): this;
}

declare class PESDKEffectFilterModel extends NSObject {

	static alloc(): PESDKEffectFilterModel; // inherited from NSObject

	static new(): PESDKEffectFilterModel; // inherited from NSObject

	identifier: string;

	intensity: number;

	constructor(o: { identifier: string; intensity: number; });

	initWithIdentifierIntensity(identifier: string, intensity: number): this;
}

declare class PESDKEffectListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKEffectListSectionController; // inherited from NSObject

	static new(): PESDKEffectListSectionController; // inherited from NSObject
}

declare class PESDKEffectMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKEffectMenuItem; // inherited from NSObject

	static new(): PESDKEffectMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly effect: PESDKEffect;

	readonly thumbnail: UIImage;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { effect: PESDKEffect; thumbnail: UIImage; });

	initWithEffectThumbnail(effect: PESDKEffect, thumbnail: UIImage): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKEffectThumbnailRenderer extends NSObject {

	static alloc(): PESDKEffectThumbnailRenderer; // inherited from NSObject

	static new(): PESDKEffectThumbnailRenderer; // inherited from NSObject

	readonly inputImage: UIImage;

	constructor(o: { inputImage: UIImage; });

	generateThumbnailsForEffectsOfSizeSingleCompletion(effects: NSArray<PESDKEffect> | PESDKEffect[], size: CGSize, singleCompletion: (p1: UIImage, p2: PESDKEffect) => void): void;

	initWithInputImage(inputImage: UIImage): this;
}

declare class PESDKFilterEditController extends PESDKViewController {

	static alloc(): PESDKFilterEditController; // inherited from NSObject

	static new(): PESDKFilterEditController; // inherited from NSObject

	boxedPhotoEditModel: PESDKPhotoEditModel;

	delegate: PESDKFilterEditControllerDelegate;

	effect: PESDKEffect;

	initialFilterIntensity: number;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	showFilterIntensitySlider: boolean;

	setEffectAnimated(effect: PESDKEffect, animated: boolean): void;
}

interface PESDKFilterEditControllerDelegate {

	filterEditControllerDidChangePhotoEditModel(filterEditController: PESDKFilterEditController): void;

	filterEditControllerDidChangePreferredPreviewViewInsetsAnimated(filterEditController: PESDKFilterEditController, animated: boolean): void;

	filterEditControllerTargetScrollView(filterEditController: PESDKFilterEditController): UIScrollView;
}
declare var PESDKFilterEditControllerDelegate: {

	prototype: PESDKFilterEditControllerDelegate;
};

declare class PESDKFilterSelectionController extends NSObject implements UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {

	static alloc(): PESDKFilterSelectionController; // inherited from NSObject

	static new(): PESDKFilterSelectionController; // inherited from NSObject

	activeEffectBlock: () => PESDKEffect;

	cellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKEffect) => void;

	readonly collectionView: UICollectionView;

	selectedBlock: (p1: PESDKEffect) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { inputImage: UIImage; });

	constructor(o: { inputImage: UIImage; cellClass: typeof NSObject; });

	class(): typeof NSObject;

	collectionViewCanEditItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewContextMenuConfigurationForItemAtIndexPathPoint(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidEndMultipleSelectionInteraction(collectionView: UICollectionView): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewPreviewForDismissingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewPreviewForHighlightingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplayContextMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewWillEndContextMenuInteractionWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithInputImage(inputImage: UIImage): this;

	initWithInputImageCellClass(inputImage: UIImage, cellClass: typeof NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	updateSelectionWithAnimated(animated: boolean): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PESDKFilterToolController extends PESDKMenuToolController implements PESDKFilterEditControllerDelegate {

	static alloc(): PESDKFilterToolController; // inherited from NSObject

	static new(): PESDKFilterToolController; // inherited from NSObject

	readonly filterEditController: PESDKFilterEditController;

	filterEditControllerDidChangePhotoEditModel(filterEditController: PESDKFilterEditController): void;

	filterEditControllerDidChangePreferredPreviewViewInsetsAnimated(filterEditController: PESDKFilterEditController, animated: boolean): void;

	filterEditControllerTargetScrollView(filterEditController: PESDKFilterEditController): UIScrollView;
}

declare class PESDKFilterToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKFilterToolControllerOptions; // inherited from NSObject

	static new(): PESDKFilterToolControllerOptions; // inherited from NSObject

	readonly filterCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKEffect) => void;

	readonly filterGroups: NSArray<PESDKGroup>;

	readonly filterIntensityChangedClosure: (p1: PESDKSlider, p2: PESDKEffect) => void;

	readonly filterIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly filterIntensitySliderContainerConfigurationClosure: (p1: UIView) => void;

	readonly filterSelectedClosure: (p1: PESDKEffect) => void;

	readonly folderCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell) => void;

	readonly initialFilterIntensity: number;

	readonly showFilterIntensitySlider: boolean;

	constructor(o: { builder: PESDKFilterToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKFilterToolControllerOptionsBuilder): this;
}

declare class PESDKFilterToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKFilterToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKFilterToolControllerOptionsBuilder; // inherited from NSObject

	filterCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKEffect) => void;

	filterGroups: NSArray<PESDKGroup>;

	filterIntensityChangedClosure: (p1: PESDKSlider, p2: PESDKEffect) => void;

	filterIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	filterIntensitySliderContainerConfigurationClosure: (p1: UIView) => void;

	filterSelectedClosure: (p1: PESDKEffect) => void;

	folderCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell) => void;

	initialFilterIntensity: number;

	showFilterIntensitySlider: boolean;

	constructor(o: { options: PESDKFilterToolControllerOptions; });

	initWithOptions(options: PESDKFilterToolControllerOptions): this;
}

declare class PESDKFloatValue extends NSObject {

	static alloc(): PESDKFloatValue; // inherited from NSObject

	static new(): PESDKFloatValue; // inherited from NSObject

	constructor(o: { absoluteValue: number; });

	constructor(o: { relativeValue: number; });

	initWithAbsoluteValue(absoluteValue: number): this;

	initWithRelativeValue(relativeValue: number): this;
}

declare class PESDKFocusEditController extends PESDKViewController {

	static alloc(): PESDKFocusEditController; // inherited from NSObject

	static new(): PESDKFocusEditController; // inherited from NSObject

	readonly boxGradientView: PESDKBoxGradientView;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	readonly circleGradientView: PESDKCircleGradientView;

	delegate: PESDKFocusEditControllerDelegate;

	focusMode: PESDKFocusMode;

	readonly linearGradientView: PESDKLinearGradientView;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	setFocusModeAnimated(focusMode: PESDKFocusMode, animated: boolean): void;
}

interface PESDKFocusEditControllerDelegate {

	focusEditControllerDidChangePhotoEditModel(focusEditController: PESDKFocusEditController): void;

	focusEditControllerDidChangePreferredPreviewViewInsetsAnimated(focusEditController: PESDKFocusEditController, animated: boolean): void;

	focusEditControllerPreviewView(focusEditController: PESDKFocusEditController): UIView;

	focusEditControllerTargetScrollView(focusEditController: PESDKFocusEditController): UIScrollView;

	focusEditControllerUntransformedImageSize(focusEditController: PESDKFocusEditController): CGSize;
}
declare var PESDKFocusEditControllerDelegate: {

	prototype: PESDKFocusEditControllerDelegate;
};

declare class PESDKFocusGradientView extends UIControl implements UIGestureRecognizerDelegate {

	static alloc(): PESDKFocusGradientView; // inherited from NSObject

	static appearance(): PESDKFocusGradientView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKFocusGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKFocusGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFocusGradientView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKFocusGradientView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFocusGradientView; // inherited from UIAppearance

	static new(): PESDKFocusGradientView; // inherited from NSObject

	readonly centerPoint: CGPoint;

	color: UIColor;

	fadeWidth: number;

	readonly normalizedFadeWidth: number;

	shadowColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PESDKFocusListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKFocusListSectionController; // inherited from NSObject

	static new(): PESDKFocusListSectionController; // inherited from NSObject
}

declare class PESDKFocusMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKFocusMenuItem; // inherited from NSObject

	static new(): PESDKFocusMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly focusMode: PESDKFocusMode;

	readonly icon: UIImage;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { focusMode: PESDKFocusMode; });

	initWithFocusMode(focusMode: PESDKFocusMode): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare const enum PESDKFocusMode {

	Off = 0,

	Radial = 1,

	Mirrored = 2,

	Linear = 3,

	Gaussian = 4
}

declare class PESDKFocusModel extends NSObject {

	static alloc(): PESDKFocusModel; // inherited from NSObject

	static new(): PESDKFocusModel; // inherited from NSObject

	blurQuality: PESDKBlurQuality;

	mode: PESDKFocusMode;

	normalizedBlurRadius: number;

	normalizedControlPoint1: CGPoint;

	normalizedControlPoint2: CGPoint;

	normalizedFadeWidth: number;

	constructor(o: { normalizedControlPoint1: CGPoint; normalizedControlPoint2: CGPoint; normalizedBlurRadius: number; normalizedFadeWidth: number; mode: PESDKFocusMode; blurQuality: PESDKBlurQuality; });

	initWithNormalizedControlPoint1NormalizedControlPoint2NormalizedBlurRadiusNormalizedFadeWidthModeBlurQuality(normalizedControlPoint1: CGPoint, normalizedControlPoint2: CGPoint, normalizedBlurRadius: number, normalizedFadeWidth: number, mode: PESDKFocusMode, blurQuality: PESDKBlurQuality): this;
}

declare class PESDKFocusToolController extends PESDKMenuToolController implements PESDKFocusEditControllerDelegate {

	static alloc(): PESDKFocusToolController; // inherited from NSObject

	static new(): PESDKFocusToolController; // inherited from NSObject

	readonly focusEditController: PESDKFocusEditController;

	focusEditControllerDidChangePhotoEditModel(focusEditController: PESDKFocusEditController): void;

	focusEditControllerDidChangePreferredPreviewViewInsetsAnimated(focusEditController: PESDKFocusEditController, animated: boolean): void;

	focusEditControllerDidSlideToValue(focusEditController: PESDKFocusEditController, value: number): void;

	focusEditControllerPreviewContainer(focusEditController: PESDKFocusEditController): UIView;

	focusEditControllerPreviewView(focusEditController: PESDKFocusEditController): UIView;

	focusEditControllerTargetScrollView(focusEditController: PESDKFocusEditController): UIScrollView;

	focusEditControllerUntransformedImageSize(focusEditController: PESDKFocusEditController): CGSize;
}

declare class PESDKFocusToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKFocusToolControllerOptions; // inherited from NSObject

	static new(): PESDKFocusToolControllerOptions; // inherited from NSObject

	readonly boxGradientViewConfigurationClosure: (p1: PESDKBoxGradientView) => void;

	readonly circleGradientViewConfigurationClosure: (p1: PESDKCircleGradientView) => void;

	readonly focusModeButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFocusMode) => void;

	readonly focusModeSelectedClosure: (p1: PESDKFocusMode) => void;

	readonly sliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly sliderContainerConfigurationClosure: (p1: UIView) => void;

	readonly sliderUpdatedValueClosure: (p1: PESDKSlider, p2: PESDKFocusMode) => void;

	constructor(o: { builder: PESDKFocusToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKFocusToolControllerOptionsBuilder): this;
}

declare class PESDKFocusToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKFocusToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKFocusToolControllerOptionsBuilder; // inherited from NSObject

	allowedFocusModes: NSArray<number>;

	boxGradientViewConfigurationClosure: (p1: PESDKBoxGradientView) => void;

	circleGradientViewConfigurationClosure: (p1: PESDKCircleGradientView) => void;

	focusModeButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFocusMode) => void;

	focusModeSelectedClosure: (p1: PESDKFocusMode) => void;

	sliderConfigurationClosure: (p1: PESDKSlider) => void;

	sliderContainerConfigurationClosure: (p1: UIView) => void;

	sliderUpdatedValueClosure: (p1: PESDKSlider, p2: PESDKFocusMode) => void;
}

declare class PESDKFolderListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKFolderListSectionController; // inherited from NSObject

	static new(): PESDKFolderListSectionController; // inherited from NSObject
}

declare class PESDKFolderMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKFolderMenuItem; // inherited from NSObject

	static new(): PESDKFolderMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly accessibilityIdentifier: string;

	readonly identifier: string;

	readonly items: NSArray<PESDKMenuItem>;

	readonly thumbnail: UIImage;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { identifier: string; title: string; thumbnail: UIImage; accessibilityIdentifier: string; items: NSArray<PESDKMenuItem> | PESDKMenuItem[]; });

	initWithIdentifierTitleThumbnailAccessibilityIdentifierItems(identifier: string, title: string, thumbnail: UIImage, accessibilityIdentifier: string, items: NSArray<PESDKMenuItem> | PESDKMenuItem[]): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKFont extends NSObject {

	static alloc(): PESDKFont; // inherited from NSObject

	static new(): PESDKFont; // inherited from NSObject

	readonly displayName: string;

	fontName: string;

	identifier: string;

	readonly url: NSURL;

	constructor(o: { displayName: string; fontName: string; identifier: string; });

	constructor(o: { url: NSURL; displayName: string; fontName: string; identifier: string; });

	initWithDisplayNameFontNameIdentifier(displayName: string, fontName: string, identifier: string): this;

	initWithUrlDisplayNameFontNameIdentifier(url: NSURL, displayName: string, fontName: string, identifier: string): this;
}

declare class PESDKFontImporter extends NSObject {

	static alloc(): PESDKFontImporter; // inherited from NSObject

	static fontWithIdentifier(identifier: string): PESDKFont;

	static new(): PESDKFontImporter; // inherited from NSObject

	static setAll(newValue: NSArray<PESDKFont> | PESDKFont[]): void;

	static all: NSArray<PESDKFont>;

	static readonly defaultItems: NSArray<PESDKFont>;
}

declare class PESDKFontListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKFontListSectionController; // inherited from NSObject

	static new(): PESDKFontListSectionController; // inherited from NSObject
}

declare class PESDKFontMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKFontMenuItem; // inherited from NSObject

	static new(): PESDKFontMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly font: PESDKFont;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { font: PESDKFont; });

	initWithFont(font: PESDKFont): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKFontSelectorView extends UIScrollView {

	static alloc(): PESDKFontSelectorView; // inherited from NSObject

	static appearance(): PESDKFontSelectorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKFontSelectorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKFontSelectorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFontSelectorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKFontSelectorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFontSelectorView; // inherited from UIAppearance

	static new(): PESDKFontSelectorView; // inherited from NSObject

	labelColor: UIColor;

	selectedFontName: string;

	selectorDelegate: PESDKFontSelectorViewDelegate;

	text: string;

	textColor: UIColor;
}

interface PESDKFontSelectorViewDelegate {

	fontSelectorViewDidSelectFontWithName(fontSelectorView: PESDKFontSelectorView, fontName: string): void;
}
declare var PESDKFontSelectorViewDelegate: {

	prototype: PESDKFontSelectorViewDelegate;
};

declare class PESDKFrame extends NSObject {

	static alloc(): PESDKFrame; // inherited from NSObject

	static createDefaultFrames(): NSArray<PESDKFrame>;

	static new(): PESDKFrame; // inherited from NSObject

	static setAll(newValue: NSArray<PESDKFrame> | PESDKFrame[]): void;

	static withIdentifier(identifier: string): PESDKFrame;

	readonly identifier: string;

	imageInsets: UIEdgeInsets;

	readonly isDynamic: boolean;

	readonly relativeScale: number;

	readonly tolerance: number;

	static all: NSArray<PESDKFrame>;

	static readonly defaultItems: NSArray<PESDKFrame>;

	constructor(o: { frameBuilder: PESDKFrameBuilderProtocol; relativeScale: number; thumbnailURL: NSURL; identifier: string; });

	constructor(o: { identifier: string; tolerance: number; });

	addImageThumbnailURLForRatio(imageURL: NSURL, thumbnailURL: NSURL, ratio: number): void;

	hasImageForRatio(ratio: number): boolean;

	imageForSizeCompletion(size: CGSize, completion: (p1: UIImage) => void): void;

	imageForSizeRelativeScaleCompletion(size: CGSize, relativeScale: number, completion: (p1: UIImage) => void): void;

	imageURLForRatio(ratio: number): NSURL;

	initWithFrameBuilderRelativeScaleThumbnailURLIdentifier(frameBuilder: PESDKFrameBuilderProtocol, relativeScale: number, thumbnailURL: NSURL, identifier: string): this;

	initWithIdentifierTolerance(identifier: string, tolerance: number): this;

	maskImageURLForRatioWithTolerance(ratio: number, tolerance: number): NSURL;

	saveThumbnailToCameraRollForSize(size: CGSize): void;

	staticImageForRatioCompletion(ratio: number, completion: (p1: UIImage) => void): void;

	thumbnailURLForRatio(ratio: number): NSURL;
}

interface PESDKFrameBuilderProtocol {

	buildWithSizeRelativeScaleCompletion(size: CGSize, relativeScale: number, completion: (p1: UIImage) => void): void;
}
declare var PESDKFrameBuilderProtocol: {

	prototype: PESDKFrameBuilderProtocol;
};

declare class PESDKFrameEditController extends PESDKTransformEditController {

	static alloc(): PESDKFrameEditController; // inherited from NSObject

	static new(): PESDKFrameEditController; // inherited from NSObject

	readonly frameImageView: UIImageView;

	rotationEnabled: boolean;

	setFrameWith(frame: PESDKFrame, image: UIImage): void;
}

declare class PESDKFrameImageGroup extends NSObject {

	static alloc(): PESDKFrameImageGroup; // inherited from NSObject

	static new(): PESDKFrameImageGroup; // inherited from NSObject

	endImage: UIImage;

	readonly endImageURL: NSURL;

	midImage: UIImage;

	midImageMode: FrameTileMode;

	readonly midImageURL: NSURL;

	startImage: UIImage;

	readonly startImageURL: NSURL;

	constructor(o: { startImageURL: NSURL; midImageURL: NSURL; endImageURL: NSURL; });

	initWithStartImageURLMidImageURLEndImageURL(startImageURL: NSURL, midImageURL: NSURL, endImageURL: NSURL): this;
}

declare class PESDKFrameImageView extends PESDKSpriteImageView {

	static alloc(): PESDKFrameImageView; // inherited from NSObject

	static appearance(): PESDKFrameImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKFrameImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKFrameImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFrameImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKFrameImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKFrameImageView; // inherited from UIAppearance

	static new(): PESDKFrameImageView; // inherited from NSObject
}

declare class PESDKFrameListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKFrameListSectionController; // inherited from NSObject

	static new(): PESDKFrameListSectionController; // inherited from NSObject
}

declare class PESDKFrameMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKFrameMenuItem; // inherited from NSObject

	static new(): PESDKFrameMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly frame: PESDKFrame;

	readonly thumbnailURL: NSURL;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { frame: PESDKFrame; ratio: number; });

	initWithFrameRatio(frame: PESDKFrame, ratio: number): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKFrameOptionListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKFrameOptionListSectionController; // inherited from NSObject

	static new(): PESDKFrameOptionListSectionController; // inherited from NSObject
}

declare class PESDKFrameOptionMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKFrameOptionMenuItem; // inherited from NSObject

	static new(): PESDKFrameOptionMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly frameAction: FrameAction;

	readonly icon: UIImage;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { frameAction: FrameAction; });

	initWithFrameAction(frameAction: FrameAction): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKFrameOptionsToolController extends PESDKMenuToolController implements PESDKTransformEditControllerDelegate {

	static alloc(): PESDKFrameOptionsToolController; // inherited from NSObject

	static new(): PESDKFrameOptionsToolController; // inherited from NSObject

	readonly frameEditController: PESDKFrameEditController;

	transformEditControllerBaseCIImage(transformEditController: PESDKTransformEditController): CIImage;

	transformEditControllerBaseImage(transformEditController: PESDKTransformEditController): UIImage;

	transformEditControllerDidChangeOrientation(transformEditController: PESDKTransformEditController): void;

	transformEditControllerDidChangePreferredPreviewViewInsetsAnimated(transformEditController: PESDKTransformEditController, animated: boolean): void;

	transformEditControllerDidChangeWantsDefaultPreviewView(transformEditController: PESDKTransformEditController): void;

	transformEditControllerSpriteViewController(transformEditController: PESDKTransformEditController): PESDKSpriteViewController;
}

declare class PESDKFrameOptionsToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKFrameOptionsToolControllerOptions; // inherited from NSObject

	static new(): PESDKFrameOptionsToolControllerOptions; // inherited from NSObject

	readonly frameActionSelectedClosure: (p1: FrameAction) => void;

	readonly rotationEnabled: boolean;

	readonly sliderChangedValueClosure: (p1: PESDKSlider, p2: FrameAction) => void;

	readonly sliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly sliderContainerConfigurationClosure: (p1: UIView) => void;

	constructor(o: { builder: PESDKFrameOptionsToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKFrameOptionsToolControllerOptionsBuilder): this;
}

declare class PESDKFrameOptionsToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKFrameOptionsToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKFrameOptionsToolControllerOptionsBuilder; // inherited from NSObject

	allowedFrameActions: NSArray<number>;

	frameActionSelectedClosure: (p1: FrameAction) => void;

	rotationEnabled: boolean;

	sliderChangedValueClosure: (p1: PESDKSlider, p2: FrameAction) => void;

	sliderConfigurationClosure: (p1: PESDKSlider) => void;

	sliderContainerConfigurationClosure: (p1: UIView) => void;

	constructor(o: { options: PESDKFrameOptionsToolControllerOptions; });

	initWithOptions(options: PESDKFrameOptionsToolControllerOptions): this;
}

declare class PESDKFrameSpriteModel extends PESDKSpriteModel {

	static alloc(): PESDKFrameSpriteModel; // inherited from NSObject

	static new(): PESDKFrameSpriteModel; // inherited from NSObject

	alpha: number;

	identifier: string;

	ratio: number;

	scale: number;

	readonly uuid: NSUUID;

	constructor(o: { frame: PESDKFrame; });

	constructor(o: { identifier: string; });

	initWithFrame(frame: PESDKFrame): this;

	initWithIdentifier(identifier: string): this;
}

declare class PESDKFrameToolController extends PESDKMenuToolController implements PESDKTransformEditControllerDelegate {

	static alloc(): PESDKFrameToolController; // inherited from NSObject

	static new(): PESDKFrameToolController; // inherited from NSObject

	readonly frameEditController: PESDKFrameEditController;

	selectedFrame: PESDKFrame;

	transformEditControllerBaseCIImage(transformEditController: PESDKTransformEditController): CIImage;

	transformEditControllerBaseImage(transformEditController: PESDKTransformEditController): UIImage;

	transformEditControllerDidChangeOrientation(transformEditController: PESDKTransformEditController): void;

	transformEditControllerDidChangePreferredPreviewViewInsetsAnimated(transformEditController: PESDKTransformEditController, animated: boolean): void;

	transformEditControllerDidChangeWantsDefaultPreviewView(transformEditController: PESDKTransformEditController): void;

	transformEditControllerSpriteViewController(transformEditController: PESDKTransformEditController): PESDKSpriteViewController;
}

declare class PESDKFrameToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKFrameToolControllerOptions; // inherited from NSObject

	static new(): PESDKFrameToolControllerOptions; // inherited from NSObject

	readonly cellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFrame) => void;

	readonly rotationEnabled: boolean;

	readonly selectedFrameClosure: (p1: PESDKFrame) => void;

	constructor(o: { builder: PESDKFrameToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKFrameToolControllerOptionsBuilder): this;
}

declare class PESDKFrameToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKFrameToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKFrameToolControllerOptionsBuilder; // inherited from NSObject

	cellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFrame) => void;

	rotationEnabled: boolean;

	selectedFrameClosure: (p1: PESDKFrame) => void;
}

declare class PESDKFreehandTool extends PESDKTool {

	static alloc(): PESDKFreehandTool; // inherited from NSObject

	static new(): PESDKFreehandTool; // inherited from NSObject

	brush: PESDKBrush;

	color: UIColor;

	hardness: number;

	beginPathWithLocationForce(location: CGPoint, force: number): void;

	continuePathWithLocationCanvasForce(location: CGPoint, canvas: PESDKCanvasView, force: number): void;

	endPathWithLocationCanvasDidMove(location: CGPoint, canvas: PESDKCanvasView, didMove: boolean): void;
}

declare class PESDKGaussianFocusFilter extends CIFilter {

	static alloc(): PESDKGaussianFocusFilter; // inherited from NSObject

	static new(): PESDKGaussianFocusFilter; // inherited from NSObject

	inputBlurQuality: number;

	inputImage: CIImage;

	inputRadius: number;
}

interface PESDKGeneratorDelegate {

	generatorDidChange(generator: PESDKStampGenerator): void;
}
declare var PESDKGeneratorDelegate: {

	prototype: PESDKGeneratorDelegate;
};

declare class PESDKGradientFocusFilter extends CIFilter {

	static alloc(): PESDKGradientFocusFilter; // inherited from NSObject

	static new(): PESDKGradientFocusFilter; // inherited from NSObject

	inputBlurQuality: number;

	inputImage: CIImage;

	inputNormalizedControlPoint1: NSValue;

	inputNormalizedControlPoint2: NSValue;

	inputRadius: number;
}

declare class PESDKGradientView extends UIView {

	static alloc(): PESDKGradientView; // inherited from NSObject

	static appearance(): PESDKGradientView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKGradientView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKGradientView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKGradientView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): PESDKGradientView; // inherited from NSObject

	bottomColor: UIColor;

	topColor: UIColor;

	constructor(o: { topColor: UIColor; bottomColor: UIColor; });

	initWithTopColorBottomColor(topColor: UIColor, bottomColor: UIColor): this;
}

declare class PESDKGroup extends NSObject {

	static alloc(): PESDKGroup; // inherited from NSObject

	static new(): PESDKGroup; // inherited from NSObject
}

declare class PESDKHandleButton extends PESDKButton {

	static alloc(): PESDKHandleButton; // inherited from NSObject

	static appearance(): PESDKHandleButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKHandleButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKHandleButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKHandleButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKHandleButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKHandleButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PESDKHandleButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): PESDKHandleButton; // inherited from UIButton

	static new(): PESDKHandleButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): PESDKHandleButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): PESDKHandleButton; // inherited from UIButton
}

declare class PESDKIconCollectionViewCell extends UICollectionViewCell {

	static alloc(): PESDKIconCollectionViewCell; // inherited from NSObject

	static appearance(): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKIconCollectionViewCell; // inherited from UIAppearance

	static new(): PESDKIconCollectionViewCell; // inherited from NSObject

	readonly activityIndicator: UIActivityIndicatorView;

	readonly imageView: UIImageView;
}

declare class PESDKIconGenerator extends NSObject {

	static alloc(): PESDKIconGenerator; // inherited from NSObject

	static generateColorImageWithColorBorderColorOfSize(color: UIColor, borderColor: UIColor, size: CGSize): UIImage;

	static generateCropAspectImageWithWidthHeightOfSizeDottedBorderShowSwitchIcon(width: number, height: number, size: CGSize, dottedBorder: boolean, showSwapIcon: boolean): UIImage;

	static generateTextImageWithFontOfSizeText(font: UIFont, size: CGSize, text: string): UIImage;

	static new(): PESDKIconGenerator; // inherited from NSObject
}

declare class PESDKImageAsset extends NSObject {

	static alloc(): PESDKImageAsset; // inherited from NSObject

	static new(): PESDKImageAsset; // inherited from NSObject

	readonly ciImage: CIImage;

	image: UIImage;

	readonly orientedCIImage: CIImage;

	userInfo: NSDictionary<string, any>;

	constructor(o: { ciImage: CIImage; userInfo: NSDictionary<string, any>; });

	constructor(o: { image: UIImage; userInfo: NSDictionary<string, any>; });

	initWithCiImageUserInfo(ciImage: CIImage, userInfo: NSDictionary<string, any>): this;

	initWithImageUserInfo(image: UIImage, userInfo: NSDictionary<string, any>): this;
}

declare const enum PESDKImageFileFormat {

	Jpeg = 0,

	Png = 1,

	Heif = 2,

	Tiff = 3
}

declare class PESDKLUTEffect extends PESDKEffect {

	static alloc(): PESDKLUTEffect; // inherited from NSObject

	static new(): PESDKLUTEffect; // inherited from NSObject

	readonly horizontalTileCount: number;

	readonly lutURL: NSURL;

	readonly verticalTileCount: number;

	constructor(o: { identifier: string; lutURL: NSURL; displayName: string; });

	constructor(o: { identifier: string; lutURL: NSURL; displayName: string; horizontalTileCount: number; verticalTileCount: number; });

	initWithIdentifierLutURLDisplayName(identifier: string, lutURL: NSURL, displayName: string): this;

	initWithIdentifierLutURLDisplayNameHorizontalTileCountVerticalTileCount(identifier: string, lutURL: NSURL, displayName: string, horizontalTileCount: number, verticalTileCount: number): this;
}

declare class PESDKLUTFilter extends CIFilter {

	static alloc(): PESDKLUTFilter; // inherited from NSObject

	static new(): PESDKLUTFilter; // inherited from NSObject

	inputHorizontalTileCount: number;

	inputImage: CIImage;

	inputIntensity: number;

	inputLUT: CIImage;

	inputVerticalTileCount: number;
}

declare class PESDKLabel extends UILabel {

	static alloc(): PESDKLabel; // inherited from NSObject

	static appearance(): PESDKLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLabel; // inherited from UIAppearance

	static new(): PESDKLabel; // inherited from NSObject

	labelColor: UIColor;
}

declare const enum PESDKLicenseProduct {

	PESDK = 0,

	VESDK = 1
}

declare class PESDKLineView extends UIView {

	static alloc(): PESDKLineView; // inherited from NSObject

	static appearance(): PESDKLineView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLineView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKLineView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLineView; // inherited from UIAppearance

	static new(): PESDKLineView; // inherited from NSObject

	shadowColor: UIColor;
}

declare class PESDKLinearFocusFilter extends CIFilter {

	static alloc(): PESDKLinearFocusFilter; // inherited from NSObject

	static new(): PESDKLinearFocusFilter; // inherited from NSObject

	inputBlurQuality: number;

	inputFadeWidth: number;

	inputImage: CIImage;

	inputNormalizedControlPoint1: NSValue;

	inputNormalizedControlPoint2: NSValue;

	inputRadius: number;
}

declare class PESDKLinearGradientView extends PESDKFocusGradientView {

	static alloc(): PESDKLinearGradientView; // inherited from NSObject

	static appearance(): PESDKLinearGradientView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKLinearGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKLinearGradientView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLinearGradientView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKLinearGradientView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKLinearGradientView; // inherited from UIAppearance

	static new(): PESDKLinearGradientView; // inherited from NSObject
}

declare class PESDKLogger extends NSObject {

	static addWithLogger(logger: PESDKLoggerProtocol): void;

	static alloc(): PESDKLogger; // inherited from NSObject

	static debug(message: string): void;

	static error(message: string): void;

	static info(message: string): void;

	static new(): PESDKLogger; // inherited from NSObject

	static removeAll(): void;

	static removeWithLogger(logger: PESDKLoggerProtocol): void;

	static setLogLevel(value: LogLevel): void;

	static warn(message: string): void;

	static logLevel: LogLevel;
}

interface PESDKLoggerProtocol {

	debug(message: string): void;

	error(message: string): void;

	info(message: string): void;

	warn(message: string): void;
}
declare var PESDKLoggerProtocol: {

	prototype: PESDKLoggerProtocol;
};

declare class PESDKMainFlowController extends NSObject {

	static alloc(): PESDKMainFlowController; // inherited from NSObject

	static new(): PESDKMainFlowController; // inherited from NSObject

	readonly configuration: PESDKConfiguration;

	readonly mediaEditViewController: PESDKMediaEditViewController;

	constructor(o: { mediaEditViewController: PESDKMediaEditViewController; configuration: PESDKConfiguration; });

	initWithMediaEditViewControllerConfiguration(mediaEditViewController: PESDKMediaEditViewController, configuration: PESDKConfiguration): this;

	photoEditToolControllerWantsToPresent(photoEditToolController: UIViewController, toolController: PESDKPhotoEditToolController): void;

	viewControllerDidCancel(viewController: UIViewController): void;

	viewControllerDidFinish(viewController: UIViewController): void;

	viewControllerDidSelect(viewController: UIViewController, menuItem: PESDKMenuItem): void;
}

declare class PESDKMarkerView extends UIView {

	static alloc(): PESDKMarkerView; // inherited from NSObject

	static appearance(): PESDKMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMarkerView; // inherited from UIAppearance

	static new(): PESDKMarkerView; // inherited from NSObject

	borderColor: UIColor;

	shadowColor: UIColor;
}

declare class PESDKMediaEditPreviewController extends PESDKViewController implements GLKViewDelegate, MTKViewDelegate, PESDKSpriteViewControllerDelegate, UIScrollViewDelegate {

	static alloc(): PESDKMediaEditPreviewController; // inherited from NSObject

	static new(): PESDKMediaEditPreviewController; // inherited from NSObject

	allowsPreviewImageZoom: boolean;

	assetCatalog: PESDKAssetCatalog;

	assetManager: PESDKAssetManager;

	readonly baseWorkCIImage: CIImage;

	baseWorkUIImage: UIImage;

	delegate: PESDKMediaEditPreviewControllerDelegate;

	loadingProgressClosure: (p1: boolean) => void;

	readonly previewView: UIView;

	readonly previewViewScrollingContainer: UIScrollView;

	readonly renderer: PESDKPhotoEditRenderer;

	readonly spriteViewController: PESDKSpriteViewController;

	undoController: PESDKUndoController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	drawInMTKView(view: MTKView): void;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadBaseImage(completion: (p1: UIImage) => void): void;

	mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	spriteViewControllerConfiguration(spriteViewController: PESDKSpriteViewController): PESDKConfiguration;

	spriteViewControllerDidChangePhotoEditModel(spriteViewController: PESDKSpriteViewController): void;

	spriteViewControllerUndoController(spriteViewController: PESDKSpriteViewController): PESDKUndoController;

	updateBrushWithOnlyIfMissing(onlyIfMissing: boolean): void;

	updateInsetsWithAnimated(animated: boolean): void;

	updateLayout(): void;

	updatePreview(): void;

	updateRenderer(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;

	workImageSizeFor(screen: UIScreen): CGSize;
}

interface PESDKMediaEditPreviewControllerDelegate {

	mediaEditPreviewControllerBackgroundColor(mediaEditPreviewController: PESDKMediaEditPreviewController): UIColor;

	mediaEditPreviewControllerConfiguration(mediaEditPreviewController: PESDKMediaEditPreviewController): PESDKConfiguration;

	mediaEditPreviewControllerDidChangePhotoEditModel(mediaEditPreviewController: PESDKMediaEditPreviewController): void;

	mediaEditPreviewControllerPlaybackEnabled(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerPreviewEnabled(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerPreviewInsets(mediaEditPreviewController: PESDKMediaEditPreviewController): UIEdgeInsets;

	mediaEditPreviewControllerPreviewScale(mediaEditPreviewController: PESDKMediaEditPreviewController): number;

	mediaEditPreviewControllerProxyZoomingActive(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerRenderMode(mediaEditPreviewController: PESDKMediaEditPreviewController): PESDKRenderMode;

	mediaEditPreviewControllerResetProxyZooming(mediaEditPreviewController: PESDKMediaEditPreviewController): void;
}
declare var PESDKMediaEditPreviewControllerDelegate: {

	prototype: PESDKMediaEditPreviewControllerDelegate;
};

declare class PESDKMediaEditViewController extends PESDKViewController implements PESDKMediaEditPreviewControllerDelegate, PESDKMenuViewControllerDelegate, PESDKPhotoEditToolControllerDelegate {

	static alloc(): PESDKMediaEditViewController; // inherited from NSObject

	static new(): PESDKMediaEditViewController; // inherited from NSObject

	readonly assetCatalog: PESDKAssetCatalog;

	readonly assetManager: PESDKAssetManager;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	readonly configuration: PESDKConfiguration;

	readonly containerView: UIView;

	readonly flowController: PESDKMainFlowController;

	readonly hasChanges: boolean;

	readonly mediaEditPreviewController: PESDKMediaEditPreviewController;

	readonly menuViewController: PESDKMenuViewController;

	readonly options: PESDKMediaEditViewControllerOptions;

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly toolbar: PESDKToolbar;

	toolbarItem: PESDKToolbarItem;

	readonly undoButton: PESDKOverlayButton;

	undoController: PESDKUndoController;

	readonly viewControllers: NSArray<PESDKPhotoEditToolController>;

	didCancel(): void;

	didDismiss(toolController: PESDKPhotoEditToolController): void;

	didPresent(toolController: PESDKPhotoEditToolController): void;

	mediaEditPreviewControllerBackgroundColor(mediaEditPreviewController: PESDKMediaEditPreviewController): UIColor;

	mediaEditPreviewControllerConfiguration(mediaEditPreviewController: PESDKMediaEditPreviewController): PESDKConfiguration;

	mediaEditPreviewControllerDidChangePhotoEditModel(mediaEditPreviewController: PESDKMediaEditPreviewController): void;

	mediaEditPreviewControllerPlaybackEnabled(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerPreviewEnabled(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerPreviewInsets(mediaEditPreviewController: PESDKMediaEditPreviewController): UIEdgeInsets;

	mediaEditPreviewControllerPreviewScale(mediaEditPreviewController: PESDKMediaEditPreviewController): number;

	mediaEditPreviewControllerProxyZoomingActive(mediaEditPreviewController: PESDKMediaEditPreviewController): boolean;

	mediaEditPreviewControllerRenderMode(mediaEditPreviewController: PESDKMediaEditPreviewController): PESDKRenderMode;

	mediaEditPreviewControllerResetProxyZooming(mediaEditPreviewController: PESDKMediaEditPreviewController): void;

	menuViewControllerDidDeselect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerDidSelect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerWillShowInAt(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem, cell: UICollectionViewCell, index: number): void;

	photoEditToolControllerBaseCIImage(photoEditToolController: PESDKPhotoEditToolController): CIImage;

	photoEditToolControllerBaseImage(photoEditToolController: PESDKPhotoEditToolController): UIImage;

	photoEditToolControllerDidChangePreferredPreviewViewInsetsAnimated(photoEditToolController: PESDKPhotoEditToolController, animated: boolean): void;

	photoEditToolControllerDidChangeWantsDefaultPreviewView(photoEditToolController: PESDKPhotoEditToolController): void;

	photoEditToolControllerPreviewController(photoEditToolController: PESDKPhotoEditToolController): PESDKMediaEditPreviewController;

	photoEditToolControllerPreviewScrollView(photoEditToolController: PESDKPhotoEditToolController): UIScrollView;

	photoEditToolControllerPreviewView(photoEditToolController: PESDKPhotoEditToolController): UIView;

	photoEditToolControllerSpriteViewController(photoEditToolController: PESDKPhotoEditToolController): PESDKSpriteViewController;

	popViewControllerAnimatedCompletion(animated: boolean, completion: () => void): PESDKPhotoEditToolController;

	presentToolFor(toolMenuItem: PESDKToolMenuItem): void;

	pushViewControllerAnimatedCompletion(viewController: PESDKPhotoEditToolController, animated: boolean, completion: () => void): void;

	renderHighResolutionVariant(): void;

	willDismiss(toolController: PESDKPhotoEditToolController): void;

	willPresent(toolController: PESDKPhotoEditToolController): void;
}

interface PESDKMediaEditViewControllerDelegate {

	mediaEditViewControllerDidDismissToolController?(mediaEditViewController: PESDKMediaEditViewController, toolController: PESDKPhotoEditToolController): void;

	mediaEditViewControllerDidPresentToolController?(mediaEditViewController: PESDKMediaEditViewController, toolController: PESDKPhotoEditToolController): void;

	mediaEditViewControllerWillDismissToolController?(mediaEditViewController: PESDKMediaEditViewController, toolController: PESDKPhotoEditToolController): void;

	mediaEditViewControllerWillPresentToolController?(mediaEditViewController: PESDKMediaEditViewController, toolController: PESDKPhotoEditToolController): void;
}
declare var PESDKMediaEditViewControllerDelegate: {

	prototype: PESDKMediaEditViewControllerDelegate;
};

declare class PESDKMediaEditViewControllerOptions extends NSObject {

	static alloc(): PESDKMediaEditViewControllerOptions; // inherited from NSObject

	static new(): PESDKMediaEditViewControllerOptions; // inherited from NSObject

	readonly allowsPreviewImageZoom: boolean;

	readonly applyButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly backgroundColor: UIColor;

	readonly discardButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly discardConfirmationClosure: (p1: PESDKMediaEditViewController, p2: () => void) => void;

	readonly forceCropMode: boolean;

	readonly mediaEditOverlayActionSelectedClosure: (p1: MediaEditOverlayAction) => void;

	readonly menuBackgroundColor: UIColor;

	readonly navigationControllerMode: PESDKNavigationControllerMode;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: MediaEditOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly titleViewConfigurationClosure: (p1: UIView) => void;

	readonly undoStepByStep: boolean;

	readonly useParentNavigationItem: boolean;

	constructor(o: { builder: PESDKMediaEditViewControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKMediaEditViewControllerOptionsBuilder): this;
}

declare class PESDKMediaEditViewControllerOptionsBuilder extends NSObject {

	static alloc(): PESDKMediaEditViewControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKMediaEditViewControllerOptionsBuilder; // inherited from NSObject

	actionButtonConfigurationBlock: (p1: PESDKMenuCollectionViewCell, p2: PESDKPhotoEditMenuItem) => void;

	allowedMediaEditOverlayActions: NSArray<number>;

	allowsPreviewImageZoom: boolean;

	applyButtonConfigurationClosure: (p1: PESDKButton) => void;

	backgroundColor: UIColor;

	discardButtonConfigurationClosure: (p1: PESDKButton) => void;

	discardConfirmationClosure: (p1: PESDKMediaEditViewController, p2: () => void) => void;

	forceCropMode: boolean;

	mediaEditOverlayActionSelectedClosure: (p1: MediaEditOverlayAction) => void;

	menuBackgroundColor: UIColor;

	menuItems: NSArray<PESDKPhotoEditMenuItem>;

	navigationControllerMode: PESDKNavigationControllerMode;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: MediaEditOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	photoEditorActionSelectedBlock: (p1: PESDKPhotoEditMenuItem) => void;

	titleViewConfigurationClosure: (p1: UIView) => void;

	undoStepByStep: boolean;

	useParentNavigationItem: boolean;

	constructor(o: { options: PESDKMediaEditViewControllerOptions; });

	initWithOptions(options: PESDKMediaEditViewControllerOptions): this;
}

declare class PESDKMenuAccessoryContainerView extends UIView {

	static alloc(): PESDKMenuAccessoryContainerView; // inherited from NSObject

	static appearance(): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuAccessoryContainerView; // inherited from UIAppearance

	static new(): PESDKMenuAccessoryContainerView; // inherited from NSObject

	backgroundColorDidChange: (p1: UIColor) => void;
}

declare class PESDKMenuCollectionView extends UICollectionView {

	static alloc(): PESDKMenuCollectionView; // inherited from NSObject

	static appearance(): PESDKMenuCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKMenuCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKMenuCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKMenuCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuCollectionView; // inherited from UIAppearance

	static new(): PESDKMenuCollectionView; // inherited from NSObject

	readonly flowLayout: UICollectionViewFlowLayout;
}

declare class PESDKMenuCollectionViewCell extends UICollectionViewCell {

	static alloc(): PESDKMenuCollectionViewCell; // inherited from NSObject

	static appearance(): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKMenuCollectionViewCell; // inherited from UIAppearance

	static new(): PESDKMenuCollectionViewCell; // inherited from NSObject

	readonly activityIndicator: UIActivityIndicatorView;

	backgroundDimmingColor: UIColor;

	readonly backgroundDimmingView: UIView;

	readonly backgroundImageView: UIImageView;

	readonly captionGradientView: PESDKGradientView;

	readonly captionTextLabel: UILabel;

	contentTintColor: UIColor;

	cornerRadius: number;

	dimsBackgroundImageWhenSelected: boolean;

	dimsContentWhenNotSelected: boolean;

	readonly iconImageView: UIImageView;

	isActive: boolean;

	selectionBorderWidth: number;

	showsCaptionTextLabel: boolean;

	showsGradientBehindCaptionTextLabel: boolean;
}

interface PESDKMenuItem extends PESDKDiffable {
}
declare var PESDKMenuItem: {

	prototype: PESDKMenuItem;

	sectionControllerType(): typeof NSObject;
};

declare class PESDKMenuListSectionController extends NSObject {

	static alloc(): PESDKMenuListSectionController; // inherited from NSObject

	static new(): PESDKMenuListSectionController; // inherited from NSObject

	displayDelegate: PESDKMenuListSectionControllerListDisplayDelegate;

	readonly hasSelectedItems: boolean;

	inset: UIEdgeInsets;

	readonly isFirstSection: boolean;

	readonly isLastSection: boolean;

	minimumInteritemSpacing: number;

	minimumLineSpacing: number;

	readonly numberOfItems: number;

	readonly section: number;

	selectionDelegate: PESDKMenuListSectionControllerSelectionDelegate;

	cellForItemAt(index: number): UICollectionViewCell;

	deselectItemAt(index: number): void;

	didSelectItemAt(index: number): void;

	didUpdateTo(object: any): void;

	hasSelectionAt(index: number): boolean;

	selectItemAt(index: number): void;

	sizeForItemAt(index: number): CGSize;
}

interface PESDKMenuListSectionControllerListDisplayDelegate {

	sectionControllerWillDisplayAt(sectionController: PESDKMenuListSectionController, cell: UICollectionViewCell, index: number): void;
}
declare var PESDKMenuListSectionControllerListDisplayDelegate: {

	prototype: PESDKMenuListSectionControllerListDisplayDelegate;
};

interface PESDKMenuListSectionControllerSelectionDelegate {

	sectionControllerDidSelectItemAtObject(sectionController: PESDKMenuListSectionController, index: number, object: any): void;
}
declare var PESDKMenuListSectionControllerSelectionDelegate: {

	prototype: PESDKMenuListSectionControllerSelectionDelegate;
};

declare class PESDKMenuToolController extends PESDKPhotoEditToolController implements PESDKMenuViewControllerDelegate {

	static alloc(): PESDKMenuToolController; // inherited from NSObject

	static new(): PESDKMenuToolController; // inherited from NSObject

	readonly contentViewController: UIViewController;

	readonly menuViewController: PESDKMenuViewController;

	menuViewControllerDidDeselect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerDidSelect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerWillShowInAt(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem, cell: UICollectionViewCell, index: number): void;
}

declare class PESDKMenuViewController extends PESDKViewController implements PESDKMenuListSectionControllerListDisplayDelegate, PESDKMenuListSectionControllerSelectionDelegate {

	static alloc(): PESDKMenuViewController; // inherited from NSObject

	static new(): PESDKMenuViewController; // inherited from NSObject

	readonly accessoryView: PESDKMenuAccessoryContainerView;

	readonly collectionView: PESDKMenuCollectionView;

	readonly contentViewController: UIViewController;

	delegate: PESDKMenuViewControllerDelegate;

	readonly isMenuHidden: boolean;

	keepsSelection: boolean;

	menuHeight: number;

	menuItems: NSArray<PESDKMenuItem>;

	readonly workspaceView: UIView;

	constructor(o: { contentViewController: UIViewController; });

	hideMenuWithAnimated(animated: boolean): void;

	initWithContentViewController(contentViewController: UIViewController): this;

	performUpdatesWithAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;

	reloadDataWithCompletion(completion: (p1: boolean) => void): void;

	reloadMenuItems(menuItems: NSArray<PESDKMenuItem> | PESDKMenuItem[]): void;

	sectionControllerDidSelectItemAtObject(sectionController: PESDKMenuListSectionController, index: number, object: any): void;

	sectionControllerWillDisplayAt(sectionController: PESDKMenuListSectionController, cell: UICollectionViewCell, index: number): void;

	showMenuWithAnimated(animated: boolean): void;
}

interface PESDKMenuViewControllerDelegate {

	menuViewControllerDidDeselect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerDidSelect(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem): void;

	menuViewControllerWillShowInAt(menuViewController: PESDKMenuViewController, menuItem: PESDKMenuItem, cell: UICollectionViewCell, index: number): void;
}
declare var PESDKMenuViewControllerDelegate: {

	prototype: PESDKMenuViewControllerDelegate;
};

declare class PESDKMultiImageSticker extends PESDKSticker {

	static alloc(): PESDKMultiImageSticker; // inherited from NSObject

	static new(): PESDKMultiImageSticker; // inherited from NSObject

	readonly stickers: NSArray<PESDKSticker>;

	constructor(o: { identifier: string; imageURL: NSURL; stickers: NSArray<PESDKSticker> | PESDKSticker[]; });

	initWithIdentifierImageURLStickers(identifier: string, imageURL: NSURL, stickers: NSArray<PESDKSticker> | PESDKSticker[]): this;
}

declare const enum PESDKNavigationControllerMode {

	UseNavigationBar = 0,

	UseToolbar = 1,

	UseNavigationBarAndParentNavigationItem = 2
}

declare class PESDKNoEffect extends PESDKEffect {

	static alloc(): PESDKNoEffect; // inherited from NSObject

	static new(): PESDKNoEffect; // inherited from NSObject
}

declare class PESDKOpenWeatherProvider extends NSObject implements CLLocationManagerDelegate, PESDKWeatherProvider {

	static alloc(): PESDKOpenWeatherProvider; // inherited from NSObject

	static new(): PESDKOpenWeatherProvider; // inherited from NSObject

	readonly apiKey: string;

	locationAccessRequestClosure: (p1: CLLocationManager) => void;

	temperatureFormat: PESDKTemperatureFormat;

	updateInterval: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly temperature: PESDKTemperature; // inherited from PESDKWeatherProvider

	readonly  // inherited from NSObjectProtocol

	constructor(o: { apiKey: string; unit: PESDKTemperatureFormat; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithApiKeyUnit(apiKey: string, unit: PESDKTemperatureFormat): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorization(manager: CLLocationManager): void;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailRangingBeaconsForConstraintError(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], region: CLBeaconRegion): void;

	locationManagerDidRangeBeaconsSatisfyingConstraint(manager: CLLocationManager, beacons: NSArray<CLBeacon> | CLBeacon[], beaconConstraint: CLBeaconIdentityConstraint): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation> | CLLocation[]): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateData(): void;
}

declare const enum PESDKOrientation {

	Normal = 1,

	FlipX = 2,

	Rotate180 = 3,

	FlipY = 4,

	Transverse = 5,

	Rotate90 = 6,

	Transpose = 7,

	Rotate270 = 8
}

declare class PESDKOverlay extends NSObject {

	static alloc(): PESDKOverlay; // inherited from NSObject

	static new(): PESDKOverlay; // inherited from NSObject

	static overlayWithIdentifier(identifier: string): PESDKOverlay;

	static setAll(newValue: NSArray<PESDKOverlay> | PESDKOverlay[]): void;

	readonly displayName: string;

	readonly identifier: string;

	readonly initialBlendMode: PESDKBlendMode;

	readonly thumbnailURL: NSURL;

	readonly url: NSURL;

	static all: NSArray<PESDKOverlay>;

	static readonly defaultItems: NSArray<PESDKOverlay>;

	static readonly none: PESDKOverlay;

	constructor(o: { identifier: string; displayName: string; url: NSURL; thumbnailURL: NSURL; initialBlendMode: PESDKBlendMode; });

	initWithIdentifierDisplayNameUrlThumbnailURLInitialBlendMode(identifier: string, displayName: string, url: NSURL, thumbnailURL: NSURL, initialBlendMode: PESDKBlendMode): this;
}

declare class PESDKOverlayButton extends PESDKButton {

	static alloc(): PESDKOverlayButton; // inherited from NSObject

	static appearance(): PESDKOverlayButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKOverlayButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKOverlayButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKOverlayButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKOverlayButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKOverlayButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PESDKOverlayButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): PESDKOverlayButton; // inherited from UIButton

	static makeAddButton(): PESDKOverlayButton;

	static makeAlignmentButton(): PESDKOverlayButton;

	static makeDeleteButton(): PESDKOverlayButton;

	static makeDisableInvertButton(): PESDKOverlayButton;

	static makeFlipButton(): PESDKOverlayButton;

	static makeInvertButton(): PESDKOverlayButton;

	static makeRedoButton(): PESDKOverlayButton;

	static makeStraightenButton(): PESDKOverlayButton;

	static makeToFrontButton(): PESDKOverlayButton;

	static makeUndoButton(): PESDKOverlayButton;

	static new(): PESDKOverlayButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): PESDKOverlayButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): PESDKOverlayButton; // inherited from UIButton

	setImage(image: UIImage): void;
}

declare class PESDKOverlayEditController extends PESDKViewController implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): PESDKOverlayEditController; // inherited from NSObject

	static new(): PESDKOverlayEditController; // inherited from NSObject

	readonly blendModeCollectionView: UICollectionView;

	readonly blendModeContainerView: PESDKGradientView;

	blendModeHideTimeInterval: number;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	delegate: PESDKOverlayEditControllerDelegate;

	initialOverlayIntensity: number;

	readonly isBlendModeViewHidden: boolean;

	overlay: PESDKOverlay;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	showBlendModeCollectionView: boolean;

	showOverlayIntensitySlider: boolean;

	static readonly collectionViewCellType: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanEditItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewContextMenuConfigurationForItemAtIndexPathPoint(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidEndMultipleSelectionInteraction(collectionView: UICollectionView): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewPreviewForDismissingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewPreviewForHighlightingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplayContextMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewWillEndContextMenuInteractionWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	hideBlendModesWithAnimated(animated: boolean): void;

	hideControlsWithAnimated(animated: boolean): void;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	selectBlendModeAnimated(blendMode: PESDKBlendMode, animated: boolean): void;

	selectNextBlendModeWithAnimated(animated: boolean): void;

	self(): this;

	setOverlayAnimated(overlay: PESDKOverlay, animated: boolean): void;

	showBlendModesWithAnimated(animated: boolean): void;

	showControlsWithAnimated(animated: boolean): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PESDKOverlayEditControllerDelegate {

	overlayEditControllerDidChangePhotoEditModel(overlayEditController: PESDKOverlayEditController): void;

	overlayEditControllerDidChangePreferredPreviewViewInsetsAnimated(overlayEditController: PESDKOverlayEditController, animated: boolean): void;

	overlayEditControllerTargetScrollView(overlayEditController: PESDKOverlayEditController): UIScrollView;

	overlayEditControllerWillDisplayIn(overlayEditController: PESDKOverlayEditController, blendMode: PESDKBlendMode, cell: PESDKBlendModeCollectionViewCell): void;
}
declare var PESDKOverlayEditControllerDelegate: {

	prototype: PESDKOverlayEditControllerDelegate;
};

declare class PESDKOverlayFilter extends CIFilter {

	static alloc(): PESDKOverlayFilter; // inherited from NSObject

	static new(): PESDKOverlayFilter; // inherited from NSObject

	inputBlendMode: number;

	inputImage: CIImage;

	inputIntensity: number;

	inputOverlayImage: CIImage;
}

declare class PESDKOverlayListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKOverlayListSectionController; // inherited from NSObject

	static new(): PESDKOverlayListSectionController; // inherited from NSObject
}

declare class PESDKOverlayMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKOverlayMenuItem; // inherited from NSObject

	static new(): PESDKOverlayMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly overlay: PESDKOverlay;

	readonly thumbnail: UIImage;

	readonly thumbnailURL: NSURL;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { overlay: PESDKOverlay; thumbnail: UIImage; });

	initWithOverlayThumbnail(overlay: PESDKOverlay, thumbnail: UIImage): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKOverlayModel extends NSObject {

	static alloc(): PESDKOverlayModel; // inherited from NSObject

	static new(): PESDKOverlayModel; // inherited from NSObject

	blendMode: PESDKBlendMode;

	identifier: string;

	intensity: number;

	constructor(o: { identifier: string; blendMode: PESDKBlendMode; intensity: number; });

	initWithIdentifierBlendModeIntensity(identifier: string, blendMode: PESDKBlendMode, intensity: number): this;
}

declare class PESDKOverlayToolController extends PESDKMenuToolController implements PESDKOverlayEditControllerDelegate {

	static alloc(): PESDKOverlayToolController; // inherited from NSObject

	static new(): PESDKOverlayToolController; // inherited from NSObject

	readonly overlayEditController: PESDKOverlayEditController;

	overlayEditControllerDidChangePhotoEditModel(overlayEditController: PESDKOverlayEditController): void;

	overlayEditControllerDidChangePreferredPreviewViewInsetsAnimated(overlayEditController: PESDKOverlayEditController, animated: boolean): void;

	overlayEditControllerTargetScrollView(overlayEditController: PESDKOverlayEditController): UIScrollView;

	overlayEditControllerWillDisplayIn(overlayEditController: PESDKOverlayEditController, blendMode: PESDKBlendMode, cell: PESDKBlendModeCollectionViewCell): void;
}

declare class PESDKOverlayToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKOverlayToolControllerOptions; // inherited from NSObject

	static new(): PESDKOverlayToolControllerOptions; // inherited from NSObject

	readonly blendModeCollectionViewCellConfigurationClosure: (p1: PESDKBlendModeCollectionViewCell, p2: PESDKBlendMode) => void;

	readonly blendModeCollectionViewConfigurationClosure: (p1: UICollectionView) => void;

	readonly blendModeSelectedClosure: (p1: PESDKBlendMode) => void;

	readonly initialOverlayIntensity: number;

	readonly overlayCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKOverlay) => void;

	readonly overlayIntensityChangedClosure: (p1: PESDKSlider, p2: PESDKOverlay) => void;

	readonly overlayIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	readonly overlayIntensitySliderContainerConfigurationClosure: (p1: UIView) => void;

	readonly overlaySelectedClosure: (p1: PESDKOverlay) => void;

	readonly showBlendModeCollectionView: boolean;

	readonly showOverlayIntensitySlider: boolean;

	constructor(o: { builder: PESDKOverlayToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKOverlayToolControllerOptionsBuilder): this;
}

declare class PESDKOverlayToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKOverlayToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKOverlayToolControllerOptionsBuilder; // inherited from NSObject

	blendModeCollectionViewCellConfigurationClosure: (p1: PESDKBlendModeCollectionViewCell, p2: PESDKBlendMode) => void;

	blendModeCollectionViewConfigurationClosure: (p1: UICollectionView) => void;

	blendModeSelectedClosure: (p1: PESDKBlendMode) => void;

	initialOverlayIntensity: number;

	overlayCellConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKOverlay) => void;

	overlayIntensityChangedClosure: (p1: PESDKSlider, p2: PESDKOverlay) => void;

	overlayIntensitySliderConfigurationClosure: (p1: PESDKSlider) => void;

	overlayIntensitySliderContainerConfigurationClosure: (p1: UIView) => void;

	overlaySelectedClosure: (p1: PESDKOverlay) => void;

	showBlendModeCollectionView: boolean;

	showOverlayIntensitySlider: boolean;

	constructor(o: { options: PESDKOverlayToolControllerOptions; });

	initWithOptions(options: PESDKOverlayToolControllerOptions): this;
}

declare class PESDKPainting extends NSObject {

	static alloc(): PESDKPainting; // inherited from NSObject

	static new(): PESDKPainting; // inherited from NSObject

	readonly bounds: CGRect;

	brushTexture: PESDKTexture;

	canvas: PESDKCanvasView;

	readonly context: EAGLContext;

	readonly dimensions: CGSize;

	readonly quadVAO: number;

	constructor(o: { size: CGSize; });

	ciImageWithSizeBackgroundColor(size: CGSize, color: UIColor): CIImage;

	clear(): void;

	imageWithSizeBackgroundColor(size: CGSize, color: UIColor): UIImage;

	initWithSize(size: CGSize): this;

	preloadPaintTexture(): void;
}

declare class PESDKPaintingFragment extends NSObject {

	static alloc(): PESDKPaintingFragment; // inherited from NSObject

	static new(): PESDKPaintingFragment; // inherited from NSObject

	readonly bounds: CGRect;

	readonly data: NSData;

	readonly dataLength: number;

	constructor(o: { data: NSData; bounds: CGRect; });

	applyIn(painting: PESDKPainting): void;

	initWithDataBounds(data: NSData, bounds: CGRect): this;
}

declare class PESDKPathModel extends PESDKSpriteModel {

	static alloc(): PESDKPathModel; // inherited from NSObject

	static new(): PESDKPathModel; // inherited from NSObject

	readonly color: UIColor;

	drawFragment: PESDKPaintingFragment;

	eraseFragment: PESDKPaintingFragment;

	readonly hardness: number;

	readonly normalizedSize: number;

	readonly points: NSArray<NSValue>;

	readonly uuid: NSUUID;

	constructor(o: { color: UIColor; normalizedSize: number; hardness: number; points: NSArray<NSValue> | NSValue[]; eraseFragment: PESDKPaintingFragment; drawFragment: PESDKPaintingFragment; });

	initWithColorNormalizedSizeHardnessPointsEraseFragmentDrawFragment(color: UIColor, normalizedSize: number, hardness: number, points: NSArray<NSValue> | NSValue[], eraseFragment: PESDKPaintingFragment, drawFragment: PESDKPaintingFragment): this;
}

declare class PESDKPhoto extends NSObject implements PESDKPhotoRepresentation {

	static alloc(): PESDKPhoto; // inherited from NSObject

	static new(): PESDKPhoto; // inherited from NSObject

	static photoFromPhotoRepresentation(photoRepresentation: PESDKPhotoRepresentation): PESDKPhoto;

	readonly data: NSData; // inherited from PESDKPhotoRepresentation

	readonly image: UIImage; // inherited from PESDKPhotoRepresentation

	readonly size: CGSize; // inherited from PESDKPhotoRepresentation

	readonly uiImage: UIImage; // inherited from PESDKPhotoRepresentation

	readonly url: NSURL; // inherited from PESDKPhotoRepresentation

	constructor(o: { data: NSData; }); // inherited from PESDKPhotoRepresentation

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; }); // inherited from PESDKPhotoRepresentation

	initWithData(data: NSData): this;

	initWithImage(image: UIImage): this;

	initWithURL(url: NSURL): this;
}

declare class PESDKPhotoEditMenuItem extends NSObject {

	static alloc(): PESDKPhotoEditMenuItem; // inherited from NSObject

	static new(): PESDKPhotoEditMenuItem; // inherited from NSObject

	readonly actionMenuItem: PESDKActionMenuItem;

	readonly toolMenuItem: PESDKToolMenuItem;

	static readonly defaultItems: NSArray<PESDKPhotoEditMenuItem>;

	constructor(o: { actionMenuItem: PESDKActionMenuItem; });

	constructor(o: { toolMenuItem: PESDKToolMenuItem; });

	initWithActionMenuItem(actionMenuItem: PESDKActionMenuItem): this;

	initWithToolMenuItem(toolMenuItem: PESDKToolMenuItem): this;
}

declare class PESDKPhotoEditModel extends NSObject {

	static alloc(): PESDKPhotoEditModel; // inherited from NSObject

	static new(): PESDKPhotoEditModel; // inherited from NSObject

	adjustmentModel: PESDKAdjustmentModel;

	effectFilterModel: PESDKEffectFilterModel;

	focusModel: PESDKFocusModel;

	isAutoEnhancementEnabled: boolean;

	overlayModel: PESDKOverlayModel;

	spriteModels: NSArray<PESDKSpriteModel>;

	transformModel: PESDKTransformModel;

	trimModel: PESDKTrimModel;

	constructor(o: { serializedData: NSData; referenceSize: CGSize; });

	initWithSerializedDataReferenceSize(data: NSData, referenceSize: CGSize): this;
}

declare class PESDKPhotoEditPreviewController extends PESDKMediaEditPreviewController {

	static alloc(): PESDKPhotoEditPreviewController; // inherited from NSObject

	static new(): PESDKPhotoEditPreviewController; // inherited from NSObject

	readonly photo: PESDKPhoto;

	constructor(o: { photoAsset: PESDKPhoto; photoEditModel: PESDKPhotoEditModel; });

	initWithPhotoAssetPhotoEditModel(photoAsset: PESDKPhoto, photoEditModel: PESDKPhotoEditModel): this;
}

declare class PESDKPhotoEditRenderer extends NSObject {

	static alloc(): PESDKPhotoEditRenderer; // inherited from NSObject

	static new(): PESDKPhotoEditRenderer; // inherited from NSObject

	assetCatalog: PESDKAssetCatalog;

	assetManager: PESDKAssetManager;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	readonly generatingCIContext: CIContext;

	originalImage: CIImage;

	readonly outputImage: CIImage;

	readonly outputImageSize: CGSize;

	renderMode: PESDKRenderMode;

	readonly renderingQueue: NSObject;

	constructor(o: { productType: PESDKLicenseProduct; });

	createOutputImageWithCompletion(completion: (p1: any) => void): void;

	drawOutputImageForInToCommandQueue(device: MTLDevice, drawable: CAMetalDrawable, rect: CGRect, commandQueue: MTLCommandQueue): PESDKDrawReturnValue;

	drawOutputImageInContextToRect(context: EAGLContext, rect: CGRect): CIImage;

	generateOutputImageDataWithFormatCompressionQualityMetadataSourcePhotoCompletionHandler(imageFormat: PESDKImageFileFormat, compressionQuality: number, metadataSourcePhoto: PESDKPhoto, completionHandler: (p1: NSData, p2: number, p3: number) => void): void;

	initWithProductType(_objCProductType: PESDKLicenseProduct): this;

	invalidateCache(): void;

	newOutputImage(): any;

	renderOutputImageInto(pixelBuffer: any): void;

	watermarkedImageFrom(inputImage: CIImage): CIImage;
}

declare class PESDKPhotoEditToolController extends PESDKViewController {

	static alloc(): PESDKPhotoEditToolController; // inherited from NSObject

	static new(): PESDKPhotoEditToolController; // inherited from NSObject

	assetCatalog: PESDKAssetCatalog;

	assetManager: PESDKAssetManager;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	readonly configuration: PESDKConfiguration;

	delegate: PESDKPhotoEditToolControllerDelegate;

	readonly isModelChangeLocal: boolean;

	readonly preferredDefaultPreviewViewScale: number;

	readonly preferredPreviewBackgroundColor: UIColor;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	readonly preferredRenderMode: PESDKRenderMode;

	toolbarItem: PESDKToolbarItem;

	undoController: PESDKUndoController;

	readonly wantsDefaultPreviewView: boolean;

	readonly wantsVideoPlayback: boolean;

	apply(sender: PESDKToolbarItem): void;

	configureToolbarItem(): void;

	discard(sender: PESDKToolbarItem): void;

	resetForZoomAndPan(): void;

	setupForZoomAndPan(): void;

	updateUserInterfaceState(): void;
}

interface PESDKPhotoEditToolControllerDelegate {

	photoEditToolControllerBaseCIImage(photoEditToolController: PESDKPhotoEditToolController): CIImage;

	photoEditToolControllerBaseImage(photoEditToolController: PESDKPhotoEditToolController): UIImage;

	photoEditToolControllerDidChangePreferredPreviewViewInsetsAnimated(photoEditToolController: PESDKPhotoEditToolController, animated: boolean): void;

	photoEditToolControllerDidChangeWantsDefaultPreviewView(photoEditToolController: PESDKPhotoEditToolController): void;

	photoEditToolControllerPreviewController(photoEditToolController: PESDKPhotoEditToolController): PESDKMediaEditPreviewController;

	photoEditToolControllerPreviewScrollView(photoEditToolController: PESDKPhotoEditToolController): UIScrollView;

	photoEditToolControllerPreviewView(photoEditToolController: PESDKPhotoEditToolController): UIView;

	photoEditToolControllerSpriteViewController(photoEditToolController: PESDKPhotoEditToolController): PESDKSpriteViewController;
}
declare var PESDKPhotoEditToolControllerDelegate: {

	prototype: PESDKPhotoEditToolControllerDelegate;
};

declare class PESDKPhotoEditViewController extends PESDKMediaEditViewController {

	static alloc(): PESDKPhotoEditViewController; // inherited from NSObject

	static new(): PESDKPhotoEditViewController; // inherited from NSObject

	delegate: PESDKPhotoEditViewControllerDelegate;

	constructor(o: { photoAsset: PESDKPhoto; configuration: PESDKConfiguration; });

	constructor(o: { photoAsset: PESDKPhoto; configuration: PESDKConfiguration; photoEditModel: PESDKPhotoEditModel; });

	initWithPhotoAssetConfiguration(photoAsset: PESDKPhoto, configuration: PESDKConfiguration): this;

	initWithPhotoAssetConfigurationPhotoEditModel(photoAsset: PESDKPhoto, configuration: PESDKConfiguration, photoEditModel: PESDKPhotoEditModel): this;

	serializedSettingsWithImageData(includeImageData: boolean): NSData;
}

interface PESDKPhotoEditViewControllerDelegate extends PESDKMediaEditViewControllerDelegate {

	photoEditViewControllerDidCancel(photoEditViewController: PESDKPhotoEditViewController): void;

	photoEditViewControllerDidFailToGeneratePhoto(photoEditViewController: PESDKPhotoEditViewController): void;

	photoEditViewControllerDidSaveImageImageAsData(photoEditViewController: PESDKPhotoEditViewController, image: UIImage, data: NSData): void;
}
declare var PESDKPhotoEditViewControllerDelegate: {

	prototype: PESDKPhotoEditViewControllerDelegate;
};

declare class PESDKPhotoEditViewControllerOptions extends PESDKMediaEditViewControllerOptions {

	static alloc(): PESDKPhotoEditViewControllerOptions; // inherited from NSObject

	static new(): PESDKPhotoEditViewControllerOptions; // inherited from NSObject

	readonly compressionQuality: number;

	readonly outputImageFileFormat: PESDKImageFileFormat;

	readonly outputImageFileFormatUTI: string;

	constructor(o: { photoEditBuilder: PESDKPhotoEditViewControllerOptionsBuilder; });

	initWithPhotoEditBuilder(photoEditBuilder: PESDKPhotoEditViewControllerOptionsBuilder): this;
}

declare class PESDKPhotoEditViewControllerOptionsBuilder extends PESDKMediaEditViewControllerOptionsBuilder {

	static alloc(): PESDKPhotoEditViewControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKPhotoEditViewControllerOptionsBuilder; // inherited from NSObject

	compressionQuality: number;

	outputImageFileFormat: PESDKImageFileFormat;

	constructor(o: { photoEditOptions: PESDKPhotoEditViewControllerOptions; });

	initWithPhotoEditOptions(photoEditOptions: PESDKPhotoEditViewControllerOptions): this;
}

interface PESDKPhotoRepresentation {

	data: NSData;

	image: UIImage;

	size: CGSize;

	uiImage: UIImage;

	url: NSURL;

	initWithData?(data: NSData): PESDKPhotoRepresentation;

	initWithURL?(url: NSURL): PESDKPhotoRepresentation;
}
declare var PESDKPhotoRepresentation: {

	prototype: PESDKPhotoRepresentation;
};

declare class PESDKPrimaryLabel extends PESDKLabel {

	static alloc(): PESDKPrimaryLabel; // inherited from NSObject

	static appearance(): PESDKPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKPrimaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKPrimaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKPrimaryLabel; // inherited from UIAppearance

	static new(): PESDKPrimaryLabel; // inherited from NSObject
}

interface PESDKProgressView {

	hide(): void;

	showWithMessage(message: string): void;
}
declare var PESDKProgressView: {

	prototype: PESDKProgressView;
};

declare class PESDKProxyZoomController extends PESDKViewController implements UIScrollViewDelegate {

	static alloc(): PESDKProxyZoomController; // inherited from NSObject

	static new(): PESDKProxyZoomController; // inherited from NSObject

	delegate: PESDKProxyZoomControllerDelegate;

	proxyContentView: UIView;

	proxyScrollView: UIScrollView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetProxyScrolling(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	setupProxyScrolling(): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PESDKProxyZoomControllerDelegate {

	proxyZoomControllerDidEndZooming(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerDidScroll(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerDidZoom(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerTargetScrollView(proxyZoomController: PESDKProxyZoomController): UIScrollView;

	proxyZoomControllerWillBeginZooming(proxyZoomController: PESDKProxyZoomController): void;
}
declare var PESDKProxyZoomControllerDelegate: {

	prototype: PESDKProxyZoomControllerDelegate;
};

declare class PESDKRadialFocusFilter extends CIFilter {

	static alloc(): PESDKRadialFocusFilter; // inherited from NSObject

	static new(): PESDKRadialFocusFilter; // inherited from NSObject

	inputBlurQuality: number;

	inputFadeWidth: number;

	inputImage: CIImage;

	inputNormalizedControlPoint1: NSValue;

	inputNormalizedControlPoint2: NSValue;

	inputRadius: number;
}

declare const enum PESDKRenderMode {

	None = 0,

	AutoEnhancement = 1,

	Transform = 2,

	Focus = 4,

	Effect = 8,

	ColorAdjustments = 16,

	Sprites = 32,

	Inset = 64,

	Overlay = 128,

	All = 255
}

declare class PESDKRoundGenerator extends PESDKStampGenerator {

	static alloc(): PESDKRoundGenerator; // inherited from NSObject

	static new(): PESDKRoundGenerator; // inherited from NSObject

	hardness: number;
}

declare class PESDKScalePicker extends UIView implements UIScrollViewDelegate {

	static alloc(): PESDKScalePicker; // inherited from NSObject

	static appearance(): PESDKScalePicker; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKScalePicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKScalePicker; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKScalePicker; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKScalePicker; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKScalePicker; // inherited from UIAppearance

	static new(): PESDKScalePicker; // inherited from NSObject

	currentValue: number;

	delegate: PESDKScalePickerDelegate;

	mainTickSize: CGSize;

	maxValue: number;

	minValue: number;

	spaceBetweenTicks: number;

	textColor: UIColor;

	tickColor: UIColor;

	tickSize: CGSize;

	valueLabelBackgroundColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToValue(value: number): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PESDKScalePickerDelegate {

	scalePickerDidChangeValue(value: number, scalePicker: PESDKScalePicker): void;
}
declare var PESDKScalePickerDelegate: {

	prototype: PESDKScalePickerDelegate;
};

declare class PESDKSharpnessFilter extends CIFilter {

	static alloc(): PESDKSharpnessFilter; // inherited from NSObject

	static new(): PESDKSharpnessFilter; // inherited from NSObject

	inputImage: CIImage;

	inputSharpness: number;
}

declare class PESDKSlider extends UIControl {

	static alloc(): PESDKSlider; // inherited from NSObject

	static appearance(): PESDKSlider; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSlider; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSlider; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSlider; // inherited from UIAppearance

	static new(): PESDKSlider; // inherited from NSObject

	filledTrackColor: UIColor;

	filledTrackView: UIView;

	leftUnfilledTrackView: UIView;

	maximumValue: number;

	minimumValue: number;

	neutralValue: number;

	readonly panGestureRecognizer: UIPanGestureRecognizer;

	rightUnfilledTrackView: UIView;

	thumbBackgroundColor: UIColor;

	thumbSize: CGSize;

	thumbTintColor: UIColor;

	thumbView: UIImageView;

	trackCornerRadius: number;

	trackHeight: number;

	unfilledTrackColor: UIColor;

	value: number;

	beginTrackingWith(panGestureRecognizer: UIPanGestureRecognizer): boolean;

	continueTrackingWith(panGestureRecognizer: UIPanGestureRecognizer): void;

	endTrackingWith(panGestureRecognizer: UIPanGestureRecognizer): void;

	thumbRectForValue(bounds: CGRect, value: number): CGRect;
}

declare class PESDKSliderTooltip extends UIView {

	static alloc(): PESDKSliderTooltip; // inherited from NSObject

	static appearance(): PESDKSliderTooltip; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSliderTooltip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSliderTooltip; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSliderTooltip; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSliderTooltip; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSliderTooltip; // inherited from UIAppearance

	static new(): PESDKSliderTooltip; // inherited from NSObject

	attributedString: NSAttributedString;

	tooltipColor: UIColor;
}

declare class PESDKSmartSticker extends PESDKSticker {

	static alloc(): PESDKSmartSticker; // inherited from NSObject

	static new(): PESDKSmartSticker; // inherited from NSObject

	static readonly defaultItems: NSArray<PESDKSticker>;
}

declare const enum PESDKSnapGuide {

	HorizontalLine = 0,

	VerticalLine = 1,

	Rectangle = 2
}

declare class PESDKSnapGuideView extends UIView {

	static alloc(): PESDKSnapGuideView; // inherited from NSObject

	static appearance(): PESDKSnapGuideView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSnapGuideView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSnapGuideView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSnapGuideView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSnapGuideView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSnapGuideView; // inherited from UIAppearance

	static new(): PESDKSnapGuideView; // inherited from NSObject

	didSnapHandler: () => void;

	guideColor: UIColor;

	guideMode: PESDKSnapGuide;

	isSnapped: boolean;

	lineDash: NSArray<number>;

	lineWidth: number;
}

declare class PESDKSnappingOptions extends NSObject {

	static alloc(): PESDKSnappingOptions; // inherited from NSObject

	static new(): PESDKSnappingOptions; // inherited from NSObject

	readonly positionSnappingEnabled: boolean;

	readonly positionSnappingThreshold: number;

	readonly rotationSnappingEnabled: boolean;

	readonly rotationSnappingThreshold: number;

	readonly snapToAngles: NSArray<number>;

	readonly snapToBottom: number;

	readonly snapToHorizontalCenterLine: boolean;

	readonly snapToLeft: number;

	readonly snapToRight: number;

	readonly snapToTop: number;

	readonly snapToVerticalCenterLine: boolean;

	readonly snappingEnabled: boolean;

	constructor(o: { builder: PESDKSnappingOptionsOptionsBuilder; });

	initWithBuilder(builder: PESDKSnappingOptionsOptionsBuilder): this;
}

declare class PESDKSnappingOptionsOptionsBuilder extends NSObject {

	static alloc(): PESDKSnappingOptionsOptionsBuilder; // inherited from NSObject

	static new(): PESDKSnappingOptionsOptionsBuilder; // inherited from NSObject

	positionSnappingEnabled: boolean;

	positionSnappingThreshold: number;

	rotationSnappingEnabled: boolean;

	rotationSnappingThreshold: number;

	snapToAngles: NSArray<number>;

	snapToBottom: number;

	snapToHorizontalCenterLine: boolean;

	snapToLeft: number;

	snapToRight: number;

	snapToTop: number;

	snapToVerticalCenterLine: boolean;

	snappingEnabled: boolean;
}

declare class PESDKSpriteAdjustmentsFilter extends CIFilter {

	static alloc(): PESDKSpriteAdjustmentsFilter; // inherited from NSObject

	static new(): PESDKSpriteAdjustmentsFilter; // inherited from NSObject

	inputBrightness: number;

	inputContrast: number;

	inputImage: CIImage;

	inputSaturation: number;
}

declare class PESDKSpriteContainerView extends UIView {

	static alloc(): PESDKSpriteContainerView; // inherited from NSObject

	static appearance(): PESDKSpriteContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSpriteContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSpriteContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSpriteContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteContainerView; // inherited from UIAppearance

	static new(): PESDKSpriteContainerView; // inherited from NSObject

	boxedPhotoEditModel: PESDKPhotoEditModel;

	currentSize: CGSize;

	readonly imageToViewScaleFactor: number;

	referenceSize: CGSize;
}

declare class PESDKSpriteImageView extends UIView {

	static alloc(): PESDKSpriteImageView; // inherited from NSObject

	static appearance(): PESDKSpriteImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSpriteImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSpriteImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSpriteImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteImageView; // inherited from UIAppearance

	static new(): PESDKSpriteImageView; // inherited from NSObject

	image: UIImage;

	rotation: number;

	readonly uuid: NSUUID;

	constructor(o: { uuid: NSUUID; });

	initWithUuid(uuid: NSUUID): this;
}

declare class PESDKSpriteLabel extends UILabel {

	static alloc(): PESDKSpriteLabel; // inherited from NSObject

	static appearance(): PESDKSpriteLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSpriteLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSpriteLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSpriteLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteLabel; // inherited from UIAppearance

	static new(): PESDKSpriteLabel; // inherited from NSObject

	horizontallyFlipped: boolean;

	normalizedCenter: CGPoint;

	normalizedFontSize: number;

	normalizedWidth: number;

	rotation: number;

	readonly uuid: NSUUID;

	verticallyFlipped: boolean;

	constructor(o: { uuid: NSUUID; });

	initWithUuid(uuid: NSUUID): this;
}

declare class PESDKSpriteModel extends NSObject {

	static alloc(): PESDKSpriteModel; // inherited from NSObject

	static new(): PESDKSpriteModel; // inherited from NSObject
}

declare class PESDKSpriteTextDesignView extends PESDKTextDesignView {

	static alloc(): PESDKSpriteTextDesignView; // inherited from NSObject

	static appearance(): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKSpriteTextDesignView; // inherited from UIAppearance

	static new(): PESDKSpriteTextDesignView; // inherited from NSObject

	horizontallyFlipped: boolean;

	normalizedCenter: CGPoint;

	normalizedPadding: number;

	normalizedWidth: number;

	rotation: number;

	readonly uuid: NSUUID;

	verticallyFlipped: boolean;

	constructor(o: { uuid: NSUUID; });

	initWithUuid(uuid: NSUUID): this;
}

declare class PESDKSpriteViewController extends PESDKViewController implements PESDKCanvasViewDataSource {

	static alloc(): PESDKSpriteViewController; // inherited from NSObject

	static new(): PESDKSpriteViewController; // inherited from NSObject

	assetCatalog: PESDKAssetCatalog;

	assetManager: PESDKAssetManager;

	boxedPhotoEditModel: PESDKPhotoEditModel;

	currentSize: CGSize;

	delegate: PESDKSpriteViewControllerDelegate;

	referenceSize: CGSize;

	readonly spriteContainerView: PESDKSpriteContainerView;

	canvasViewAppliedOrientation(canvasView: PESDKCanvasView): PESDKOrientation;

	canvasViewImageInsets(canvasView: PESDKCanvasView): UIEdgeInsets;

	canvasViewNormalizedCropRect(canvasView: PESDKCanvasView): CGRect;

	canvasViewOutputImageSize(canvasView: PESDKCanvasView): CGSize;

	canvasViewStraightenAngle(canvasView: PESDKCanvasView): number;

	tapped(gestureRecognizer: UITapGestureRecognizer): void;
}

interface PESDKSpriteViewControllerDelegate {

	spriteViewControllerConfiguration(spriteViewController: PESDKSpriteViewController): PESDKConfiguration;

	spriteViewControllerDidChangePhotoEditModel(spriteViewController: PESDKSpriteViewController): void;

	spriteViewControllerUndoController(spriteViewController: PESDKSpriteViewController): PESDKUndoController;
}
declare var PESDKSpriteViewControllerDelegate: {

	prototype: PESDKSpriteViewControllerDelegate;
};

declare class PESDKStampGenerator extends NSObject {

	static alloc(): PESDKStampGenerator; // inherited from NSObject

	static new(): PESDKStampGenerator; // inherited from NSObject

	readonly baseBounds: CGRect;

	readonly baseDimension: number;

	delegate: PESDKGeneratorDelegate;

	readonly scale: number;

	size: CGSize;

	readonly smallStamp: UIImage;

	readonly stamp: UIImage;

	radialFadeWithHardness(hardness: number): any;

	renderStampInContext(context: any): void;
}

declare class PESDKSticker extends NSObject {

	static alloc(): PESDKSticker; // inherited from NSObject

	static new(): PESDKSticker; // inherited from NSObject

	static withIdentifier(identifier: string): PESDKSticker;

	allowBrightnessAdjustment: boolean;

	allowContrastAdjustment: boolean;

	allowSaturationAdjustment: boolean;

	readonly identifier: string;

	readonly imageURL: NSURL;

	readonly thumbnailURL: NSURL;

	tintMode: PESDKStickerTintMode;

	constructor(o: { imageURL: NSURL; thumbnailURL: NSURL; identifier: string; });

	constructor(o: { imageURL: NSURL; thumbnailURL: NSURL; tintMode: PESDKStickerTintMode; identifier: string; });

	initWithImageURLThumbnailURLIdentifier(imageURL: NSURL, thumbnailURL: NSURL, identifier: string): this;

	initWithImageURLThumbnailURLTintModeIdentifier(imageURL: NSURL, thumbnailURL: NSURL, tintMode: PESDKStickerTintMode, identifier: string): this;
}

declare const enum PESDKStickerAdjustmentModel {

	Brightness = 0,

	Contrast = 1,

	Saturation = 2,

	Opacity = 3
}

declare class PESDKStickerCategory extends NSObject {

	static alloc(): PESDKStickerCategory; // inherited from NSObject

	static createDefaultStickerCategories(): NSArray<PESDKStickerCategory>;

	static new(): PESDKStickerCategory; // inherited from NSObject

	static setAll(newValue: NSArray<PESDKStickerCategory> | PESDKStickerCategory[]): void;

	readonly identifier: string;

	readonly imageURL: NSURL;

	readonly stickers: NSArray<PESDKSticker>;

	readonly title: string;

	static all: NSArray<PESDKStickerCategory>;

	static readonly defaultItems: NSArray<PESDKStickerCategory>;

	constructor(o: { identifier: string; title: string; imageURL: NSURL; stickers: NSArray<PESDKSticker> | PESDKSticker[]; });

	constructor(o: { title: string; imageURL: NSURL; stickers: NSArray<PESDKSticker> | PESDKSticker[]; });

	initWithIdentifierTitleImageURLStickers(identifier: string, title: string, imageURL: NSURL, stickers: NSArray<PESDKSticker> | PESDKSticker[]): this;

	initWithTitleImageURLStickers(title: string, imageURL: NSURL, stickers: NSArray<PESDKSticker> | PESDKSticker[]): this;
}

declare class PESDKStickerCategoryActionMenuItem extends PESDKActionMenuItem {

	static alloc(): PESDKStickerCategoryActionMenuItem; // inherited from NSObject

	static new(): PESDKStickerCategoryActionMenuItem; // inherited from NSObject
}

declare class PESDKStickerCategoryListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKStickerCategoryListSectionController; // inherited from NSObject

	static new(): PESDKStickerCategoryListSectionController; // inherited from NSObject
}

declare class PESDKStickerCategoryMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKStickerCategoryMenuItem; // inherited from NSObject

	static new(): PESDKStickerCategoryMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly iconURL: NSURL;

	readonly stickerCategory: PESDKStickerCategory;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { stickerCategory: PESDKStickerCategory; });

	initWithStickerCategory(stickerCategory: PESDKStickerCategory): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKStickerImageView extends PESDKSpriteImageView {

	static alloc(): PESDKStickerImageView; // inherited from NSObject

	static appearance(): PESDKStickerImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKStickerImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKStickerImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKStickerImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKStickerImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKStickerImageView; // inherited from UIAppearance

	static new(): PESDKStickerImageView; // inherited from NSObject

	brightness: number;

	colorizeColor: UIColor;

	contrast: number;

	horizontallyFlipped: boolean;

	normalizedCenter: CGPoint;

	normalizedSize: CGSize;

	saturation: number;

	tintMode: PESDKStickerTintMode;

	verticallyFlipped: boolean;
}

declare class PESDKStickerMenuItem extends NSObject {

	static alloc(): PESDKStickerMenuItem; // inherited from NSObject

	static new(): PESDKStickerMenuItem; // inherited from NSObject

	readonly iconURL: NSURL;

	readonly sticker: PESDKSticker;

	constructor(o: { sticker: PESDKSticker; });

	initWithSticker(sticker: PESDKSticker): this;
}

declare class PESDKStickerOptionListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKStickerOptionListSectionController; // inherited from NSObject

	static new(): PESDKStickerOptionListSectionController; // inherited from NSObject
}

declare class PESDKStickerOptionMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKStickerOptionMenuItem; // inherited from NSObject

	static new(): PESDKStickerOptionMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly stickerAction: StickerAction;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { stickerAction: StickerAction; icon: UIImage; });

	initWithStickerActionIcon(stickerAction: StickerAction, icon: UIImage): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKStickerOptionsToolController extends PESDKMenuToolController {

	static alloc(): PESDKStickerOptionsToolController; // inherited from NSObject

	static new(): PESDKStickerOptionsToolController; // inherited from NSObject

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly undoButton: PESDKOverlayButton;
}

declare class PESDKStickerOptionsToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKStickerOptionsToolControllerOptions; // inherited from NSObject

	static new(): PESDKStickerOptionsToolControllerOptions; // inherited from NSObject

	readonly actionButtonConfigurationClosure: (p1: UICollectionViewCell, p2: StickerAction) => void;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: StickerOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly stickerActionSelectedClosure: (p1: StickerAction) => void;

	readonly stickerOverlayActionSelectedClosure: (p1: StickerOverlayAction) => void;

	constructor(o: { builder: PESDKStickerOptionsToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKStickerOptionsToolControllerOptionsBuilder): this;
}

declare class PESDKStickerOptionsToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKStickerOptionsToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKStickerOptionsToolControllerOptionsBuilder; // inherited from NSObject

	actionButtonConfigurationClosure: (p1: UICollectionViewCell, p2: StickerAction) => void;

	allowedStickerOverlayActions: NSArray<number>;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: StickerOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	stickerActionSelectedClosure: (p1: StickerAction) => void;

	stickerOverlayActionSelectedClosure: (p1: StickerOverlayAction) => void;
}

declare class PESDKStickerSelectionController extends PESDKViewController implements UICollectionViewDataSource, UICollectionViewDataSourcePrefetching, UICollectionViewDelegate {

	static alloc(): PESDKStickerSelectionController; // inherited from NSObject

	static new(): PESDKStickerSelectionController; // inherited from NSObject

	assetManager: PESDKAssetManager;

	cellConfigurationClosure: (p1: PESDKIconCollectionViewCell, p2: PESDKSticker) => void;

	readonly collectionView: UICollectionView;

	delegate: PESDKStickerSelectionControllerDelegate;

	readonly gradientView: PESDKGradientView;

	stickerAddedClosure: (p1: PESDKSticker) => void;

	stickerPreviewSize: CGSize;

	stickers: NSArray<PESDKSticker>;

	readonly visualEffectView: UIVisualEffectView;

	static readonly collectionViewCellType: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanEditItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCancelPrefetchingForItemsAtIndexPaths(collectionView: UICollectionView, indexPaths: NSArray<NSIndexPath> | NSIndexPath[]): void;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewContextMenuConfigurationForItemAtIndexPathPoint(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidEndMultipleSelectionInteraction(collectionView: UICollectionView): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewPrefetchItemsAtIndexPaths(collectionView: UICollectionView, indexPaths: NSArray<NSIndexPath> | NSIndexPath[]): void;

	collectionViewPreviewForDismissingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewPreviewForHighlightingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplayContextMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewWillEndContextMenuInteractionWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface PESDKStickerSelectionControllerDelegate {

	stickerSelectionControllerDidSelectWith(stickerSelectionController: PESDKStickerSelectionController, sticker: PESDKSticker, image: UIImage): void;
}
declare var PESDKStickerSelectionControllerDelegate: {

	prototype: PESDKStickerSelectionControllerDelegate;
};

declare class PESDKStickerSelectionView extends UIView {

	static alloc(): PESDKStickerSelectionView; // inherited from NSObject

	static appearance(): PESDKStickerSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKStickerSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKStickerSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKStickerSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKStickerSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKStickerSelectionView; // inherited from UIAppearance

	static new(): PESDKStickerSelectionView; // inherited from NSObject

	decrementHandler: () => void;

	incrementHandler: () => void;

	rotateLeftHandler: () => void;

	rotateRightHandler: () => void;
}

declare class PESDKStickerSpriteModel extends PESDKSpriteModel {

	static alloc(): PESDKStickerSpriteModel; // inherited from NSObject

	static new(): PESDKStickerSpriteModel; // inherited from NSObject

	alpha: number;

	brightness: number;

	contrast: number;

	horizontallyFlipped: boolean;

	identifier: string;

	normalizedCenter: CGPoint;

	normalizedSize: CGSize;

	rotation: number;

	saturation: number;

	tintColor: UIColor;

	readonly uuid: NSUUID;

	verticallyFlipped: boolean;

	constructor(o: { identifier: string; });

	constructor(o: { sticker: PESDKSticker; });

	initWithIdentifier(identifier: string): this;

	initWithSticker(sticker: PESDKSticker): this;
}

declare const enum PESDKStickerTintMode {

	None = 0,

	Solid = 1,

	Colorized = 2
}

declare class PESDKStickerToolController extends PESDKMenuToolController implements PESDKStickerSelectionControllerDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): PESDKStickerToolController; // inherited from NSObject

	static new(): PESDKStickerToolController; // inherited from NSObject

	readonly stickerSelectionController: PESDKStickerSelectionController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stickerSelectionControllerDidSelectWith(stickerSelectionController: PESDKStickerSelectionController, sticker: PESDKSticker, image: UIImage): void;
}

declare class PESDKStickerToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKStickerToolControllerOptions; // inherited from NSObject

	static new(): PESDKStickerToolControllerOptions; // inherited from NSObject

	readonly addedStickerClosure: (p1: PESDKSticker) => void;

	readonly defaultPersonalStickerTintMode: PESDKStickerTintMode;

	readonly defaultStickerCategoryIndex: number;

	readonly personalStickersEnabled: boolean;

	readonly stickerButtonConfigurationClosure: (p1: PESDKIconCollectionViewCell, p2: PESDKSticker) => void;

	readonly stickerCategoryButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKStickerCategory) => void;

	readonly stickerPreviewSize: CGSize;

	readonly weatherProvider: PESDKWeatherProvider;

	constructor(o: { builder: PESDKStickerToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKStickerToolControllerOptionsBuilder): this;
}

declare class PESDKStickerToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKStickerToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKStickerToolControllerOptionsBuilder; // inherited from NSObject

	addedStickerClosure: (p1: PESDKSticker) => void;

	defaultPersonalStickerTintMode: PESDKStickerTintMode;

	defaultStickerCategoryIndex: number;

	personalStickersEnabled: boolean;

	stickerButtonConfigurationClosure: (p1: PESDKIconCollectionViewCell, p2: PESDKSticker) => void;

	stickerCategoryButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKStickerCategory) => void;

	stickerPreviewSize: CGSize;

	weatherProvider: PESDKWeatherProvider;

	constructor(o: { options: PESDKStickerToolControllerOptions; });

	initWithOptions(options: PESDKStickerToolControllerOptions): this;
}

declare class PESDKTemperature extends NSObject {

	static alloc(): PESDKTemperature; // inherited from NSObject

	static new(): PESDKTemperature; // inherited from NSObject

	readonly unit: PESDKTemperatureUnit;

	readonly value: number;

	constructor(o: { value: number; unit: PESDKTemperatureUnit; });

	initWithValueUnit(value: number, unit: PESDKTemperatureUnit): this;
}

declare class PESDKTemperatureFilter extends CIFilter {

	static alloc(): PESDKTemperatureFilter; // inherited from NSObject

	static new(): PESDKTemperatureFilter; // inherited from NSObject

	inputImage: CIImage;

	inputTemperature: number;
}

declare const enum PESDKTemperatureFormat {

	Fahrenheit = 0,

	Celsius = 1,

	Kelvin = 2,

	Locale = 3
}

declare const enum PESDKTemperatureUnit {

	Fahrenheit = 0,

	Celsius = 1,

	Kelvin = 2
}

declare class PESDKTextButton extends PESDKButton {

	static alloc(): PESDKTextButton; // inherited from NSObject

	static appearance(): PESDKTextButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKTextButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKTextButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKTextButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PESDKTextButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): PESDKTextButton; // inherited from UIButton

	static new(): PESDKTextButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): PESDKTextButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): PESDKTextButton; // inherited from UIButton

	displayName: string;

	fontName: string;

	labelColor: UIColor;
}

declare class PESDKTextColorToolControllerOptions extends PESDKColorToolControllerOptions {

	static alloc(): PESDKTextColorToolControllerOptions; // inherited from NSObject

	static new(): PESDKTextColorToolControllerOptions; // inherited from NSObject

	readonly availableBackgroundTextColors: NSArray<PESDKColor>;

	constructor(o: { textBuilder: PESDKTextColorToolControllerOptionsBuilder; });

	initWithTextBuilder(textBuilder: PESDKTextColorToolControllerOptionsBuilder): this;
}

declare class PESDKTextColorToolControllerOptionsBuilder extends PESDKColorToolControllerOptionsBuilder {

	static alloc(): PESDKTextColorToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextColorToolControllerOptionsBuilder; // inherited from NSObject

	availableBackgroundTextColors: NSArray<PESDKColor>;
}

declare class PESDKTextDesign extends NSObject {

	static alloc(): PESDKTextDesign; // inherited from NSObject

	static new(): PESDKTextDesign; // inherited from NSObject

	static setAll(newValue: NSArray<PESDKTextDesign> | PESDKTextDesign[]): void;

	static setLegacy(value: NSArray<PESDKTextDesign> | PESDKTextDesign[]): void;

	static textDesignWithIdentifier(identifier: string): PESDKTextDesign;

	readonly identifier: string;

	static all: NSArray<PESDKTextDesign>;

	static readonly defaultItems: NSArray<PESDKTextDesign>;

	static legacy: NSArray<PESDKTextDesign>;
}

declare class PESDKTextDesignBlocks extends PESDKTextDesign {

	static alloc(): PESDKTextDesignBlocks; // inherited from NSObject

	static new(): PESDKTextDesignBlocks; // inherited from NSObject
}

declare class PESDKTextDesignBlocksCondensed extends PESDKTextDesignBlocks {

	static alloc(): PESDKTextDesignBlocksCondensed; // inherited from NSObject

	static new(): PESDKTextDesignBlocksCondensed; // inherited from NSObject
}

declare class PESDKTextDesignBlocksLight extends PESDKTextDesignBlocks {

	static alloc(): PESDKTextDesignBlocksLight; // inherited from NSObject

	static new(): PESDKTextDesignBlocksLight; // inherited from NSObject
}

declare class PESDKTextDesignBlocksLight_V3_1_0 extends PESDKTextDesignBlocksLight {

	static alloc(): PESDKTextDesignBlocksLight_V3_1_0; // inherited from NSObject

	static new(): PESDKTextDesignBlocksLight_V3_1_0; // inherited from NSObject
}

declare class PESDKTextDesignCelebrate extends PESDKTextDesignBlocks {

	static alloc(): PESDKTextDesignCelebrate; // inherited from NSObject

	static new(): PESDKTextDesignCelebrate; // inherited from NSObject
}

declare class PESDKTextDesignCelebrateSimple extends PESDKTextDesignCelebrate {

	static alloc(): PESDKTextDesignCelebrateSimple; // inherited from NSObject

	static new(): PESDKTextDesignCelebrateSimple; // inherited from NSObject
}

declare class PESDKTextDesignEqualWidth extends PESDKTextDesign {

	static alloc(): PESDKTextDesignEqualWidth; // inherited from NSObject

	static new(): PESDKTextDesignEqualWidth; // inherited from NSObject
}

declare class PESDKTextDesignEqualWidthFat extends PESDKTextDesignEqualWidth {

	static alloc(): PESDKTextDesignEqualWidthFat; // inherited from NSObject

	static new(): PESDKTextDesignEqualWidthFat; // inherited from NSObject
}

declare class PESDKTextDesignListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKTextDesignListSectionController; // inherited from NSObject

	static new(): PESDKTextDesignListSectionController; // inherited from NSObject
}

declare class PESDKTextDesignMasked extends PESDKTextDesign {

	static alloc(): PESDKTextDesignMasked; // inherited from NSObject

	static new(): PESDKTextDesignMasked; // inherited from NSObject
}

declare class PESDKTextDesignMaskedBadge extends PESDKTextDesignMasked {

	static alloc(): PESDKTextDesignMaskedBadge; // inherited from NSObject

	static new(): PESDKTextDesignMaskedBadge; // inherited from NSObject
}

declare class PESDKTextDesignMaskedSpeechBubble extends PESDKTextDesignMasked {

	static alloc(): PESDKTextDesignMaskedSpeechBubble; // inherited from NSObject

	static new(): PESDKTextDesignMaskedSpeechBubble; // inherited from NSObject
}

declare class PESDKTextDesignMaskedSpeechBubbleComic extends PESDKTextDesignMaskedSpeechBubble {

	static alloc(): PESDKTextDesignMaskedSpeechBubbleComic; // inherited from NSObject

	static new(): PESDKTextDesignMaskedSpeechBubbleComic; // inherited from NSObject
}

declare class PESDKTextDesignMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKTextDesignMenuItem; // inherited from NSObject

	static new(): PESDKTextDesignMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly textDesign: PESDKTextDesign;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { textDesign: PESDKTextDesign; });

	initWithTextDesign(textDesign: PESDKTextDesign): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKTextDesignMultiline extends PESDKTextDesignMasked {

	static alloc(): PESDKTextDesignMultiline; // inherited from NSObject

	static new(): PESDKTextDesignMultiline; // inherited from NSObject
}

declare class PESDKTextDesignOptionsToolController extends PESDKMenuToolController {

	static alloc(): PESDKTextDesignOptionsToolController; // inherited from NSObject

	static new(): PESDKTextDesignOptionsToolController; // inherited from NSObject

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly undoButton: PESDKOverlayButton;
}

declare class PESDKTextDesignOptionsToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTextDesignOptionsToolControllerOptions; // inherited from NSObject

	static new(): PESDKTextDesignOptionsToolControllerOptions; // inherited from NSObject

	readonly actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKTextDesign) => void;

	readonly overlayActionSelectedClosure: (p1: TextDesignOverlayAction) => void;

	readonly overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: TextDesignOverlayAction) => void;

	readonly overlayButtonInsets: UIEdgeInsets;

	readonly textDesignActionSelectedClosure: (p1: PESDKTextDesign) => void;

	constructor(o: { builder: PESDKTextDesignOptionsToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTextDesignOptionsToolControllerOptionsBuilder): this;
}

declare class PESDKTextDesignOptionsToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTextDesignOptionsToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextDesignOptionsToolControllerOptionsBuilder; // inherited from NSObject

	actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKTextDesign) => void;

	allowedTextDesignOverlayActions: NSArray<number>;

	overlayActionSelectedClosure: (p1: TextDesignOverlayAction) => void;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: TextDesignOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	textDesignActionSelectedClosure: (p1: PESDKTextDesign) => void;

	constructor(o: { options: PESDKTextDesignOptionsToolControllerOptions; });

	initWithOptions(options: PESDKTextDesignOptionsToolControllerOptions): this;
}

declare class PESDKTextDesignParticles extends PESDKTextDesignSunshine {

	static alloc(): PESDKTextDesignParticles; // inherited from NSObject

	static new(): PESDKTextDesignParticles; // inherited from NSObject
}

declare class PESDKTextDesignRotated extends PESDKTextDesign {

	static alloc(): PESDKTextDesignRotated; // inherited from NSObject

	static new(): PESDKTextDesignRotated; // inherited from NSObject
}

declare class PESDKTextDesignSpriteModel extends PESDKSpriteModel {

	static alloc(): PESDKTextDesignSpriteModel; // inherited from NSObject

	static new(): PESDKTextDesignSpriteModel; // inherited from NSObject

	horizontallyFlipped: boolean;

	identifier: string;

	isInverted: boolean;

	normalizedCenter: CGPoint;

	normalizedPadding: number;

	normalizedWidth: number;

	randomizerSeed: number;

	rotation: number;

	text: string;

	tintColor: UIColor;

	readonly uuid: NSUUID;

	verticallyFlipped: boolean;

	constructor(o: { identifier: string; });

	initWithIdentifier(identifier: string): this;
}

declare class PESDKTextDesignSunshine extends PESDKTextDesign {

	static alloc(): PESDKTextDesignSunshine; // inherited from NSObject

	static new(): PESDKTextDesignSunshine; // inherited from NSObject

	constructor(o: { identifier: string; });

	initWithIdentifier(identifier: string): this;
}

declare class PESDKTextDesignSunshine_V3_1_0 extends PESDKTextDesignSunshine {

	static alloc(): PESDKTextDesignSunshine_V3_1_0; // inherited from NSObject

	static new(): PESDKTextDesignSunshine_V3_1_0; // inherited from NSObject
}

declare class PESDKTextDesignToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTextDesignToolControllerOptions; // inherited from NSObject

	static new(): PESDKTextDesignToolControllerOptions; // inherited from NSObject

	readonly colorCollectionViewConfigurationClosure: (p1: PESDKColorCollectionView) => void;

	readonly colorPalette: PESDKColorPalette;

	readonly dimmingViewConfigurationClosure: (p1: UIView) => void;

	readonly textViewConfigurationClosure: (p1: UITextView) => void;

	readonly updateTitle: string;

	constructor(o: { builder: PESDKTextDesignToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTextDesignToolControllerOptionsBuilder): this;
}

declare class PESDKTextDesignToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTextDesignToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextDesignToolControllerOptionsBuilder; // inherited from NSObject

	colorCollectionViewConfigurationClosure: (p1: PESDKColorCollectionView) => void;

	colorPalette: PESDKColorPalette;

	dimmingViewConfigurationClosure: (p1: UIView) => void;

	textViewConfigurationClosure: (p1: UITextView) => void;

	updateTitle: string;

	constructor(o: { options: PESDKTextDesignToolControllerOptions; });

	initWithOptions(options: PESDKTextDesignToolControllerOptions): this;
}

declare class PESDKTextDesignView extends UIView {

	static alloc(): PESDKTextDesignView; // inherited from NSObject

	static appearance(): PESDKTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKTextDesignView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextDesignView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKTextDesignView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextDesignView; // inherited from UIAppearance

	static new(): PESDKTextDesignView; // inherited from NSObject

	readonly imageView: UIImageView;

	isInverted: boolean;

	padding: number;

	randomizerSeed: number;

	renderingScaleFactor: number;

	text: string;

	textDesign: PESDKTextDesign;

	render(): void;
}

declare class PESDKTextDesignWatercolor extends PESDKTextDesignMaskedSpeechBubble {

	static alloc(): PESDKTextDesignWatercolor; // inherited from NSObject

	static new(): PESDKTextDesignWatercolor; // inherited from NSObject
}

declare class PESDKTextFontToolController extends PESDKMenuToolController {

	static alloc(): PESDKTextFontToolController; // inherited from NSObject

	static new(): PESDKTextFontToolController; // inherited from NSObject
}

declare class PESDKTextFontToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTextFontToolControllerOptions; // inherited from NSObject

	static new(): PESDKTextFontToolControllerOptions; // inherited from NSObject

	readonly actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFont) => void;

	readonly fontSelectorViewConfigurationClosure: (p1: PESDKFontSelectorView) => void;

	readonly handleButtonConfigurationClosure: (p1: PESDKHandleButton) => void;

	readonly textFontActionSelectedClosure: (p1: string) => void;

	constructor(o: { builder: PESDKTextFontToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTextFontToolControllerOptionsBuilder): this;
}

declare class PESDKTextFontToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTextFontToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextFontToolControllerOptionsBuilder; // inherited from NSObject

	actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKFont) => void;

	fontSelectorViewConfigurationClosure: (p1: PESDKFontSelectorView) => void;

	handleButtonConfigurationClosure: (p1: PESDKHandleButton) => void;

	textFontActionSelectedClosure: (p1: string) => void;
}

declare class PESDKTextOptionListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKTextOptionListSectionController; // inherited from NSObject

	static new(): PESDKTextOptionListSectionController; // inherited from NSObject
}

declare class PESDKTextOptionMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKTextOptionMenuItem; // inherited from NSObject

	static new(): PESDKTextOptionMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly textAction: TextAction;

	readonly title: string;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { textAction: TextAction; icon: UIImage; });

	initWithTextActionIcon(textAction: TextAction, icon: UIImage): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKTextOptionsToolController extends PESDKMenuToolController {

	static alloc(): PESDKTextOptionsToolController; // inherited from NSObject

	static new(): PESDKTextOptionsToolController; // inherited from NSObject

	readonly overlayButtons: NSArray<PESDKOverlayButton>;

	readonly redoButton: PESDKOverlayButton;

	readonly undoButton: PESDKOverlayButton;
}

declare class PESDKTextOptionsToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTextOptionsToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextOptionsToolControllerOptionsBuilder; // inherited from NSObject

	actionButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: TextAction) => void;

	allowedTextActions: NSArray<number>;

	allowedTextOverlayActions: NSArray<number>;

	overlayActionSelectedClosure: (p1: TextOverlayAction) => void;

	overlayButtonConfigurationClosure: (p1: PESDKOverlayButton, p2: TextOverlayAction) => void;

	overlayButtonInsets: UIEdgeInsets;

	textActionSelectedClosure: (p1: TextAction) => void;
}

declare class PESDKTextSelectionView extends UIView {

	static alloc(): PESDKTextSelectionView; // inherited from NSObject

	static appearance(): PESDKTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKTextSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKTextSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTextSelectionView; // inherited from UIAppearance

	static new(): PESDKTextSelectionView; // inherited from NSObject

	decreaseBoundingBoxHandler: () => void;

	decrementHandler: () => void;

	increaseBoundingBoxHandler: () => void;

	incrementHandler: () => void;

	readonly leftHandle: UIView;

	readonly rightHandle: UIView;

	rotateLeftHandler: () => void;

	rotateRightHandler: () => void;
}

declare class PESDKTextSpriteModel extends PESDKSpriteModel {

	static alloc(): PESDKTextSpriteModel; // inherited from NSObject

	static new(): PESDKTextSpriteModel; // inherited from NSObject

	backgroundColor: UIColor;

	fontIdentifier: string;

	horizontallyFlipped: boolean;

	normalizedCenter: CGPoint;

	normalizedFontSize: number;

	normalizedWidth: number;

	rotation: number;

	text: string;

	textAlignment: NSTextAlignment;

	textColor: UIColor;

	readonly uuid: NSUUID;

	verticallyFlipped: boolean;
}

declare class PESDKTextToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTextToolControllerOptions; // inherited from NSObject

	static new(): PESDKTextToolControllerOptions; // inherited from NSObject

	readonly defaultTextColor: UIColor;

	readonly dimmingViewConfigurationClosure: (p1: UIView) => void;

	readonly maximumTextSize: number;

	readonly minimumTextSize: number;

	readonly textViewConfigurationClosure: (p1: UITextView) => void;

	readonly updateTitle: string;

	constructor(o: { builder: PESDKTextToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTextToolControllerOptionsBuilder): this;
}

declare class PESDKTextToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTextToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTextToolControllerOptionsBuilder; // inherited from NSObject

	defaultTextColor: UIColor;

	dimmingViewConfigurationClosure: (p1: UIView) => void;

	maximumTextSize: number;

	minimumTextSize: number;

	textViewConfigurationClosure: (p1: UITextView) => void;

	updateTitle: string;

	constructor(o: { options: PESDKTextToolControllerOptions; });

	initWithOptions(options: PESDKTextToolControllerOptions): this;
}

declare class PESDKTexture extends NSObject {

	static alloc(): PESDKTexture; // inherited from NSObject

	static new(): PESDKTexture; // inherited from NSObject

	readonly textureName: number;

	constructor(o: { cgImage: any; forceRGB: boolean; });

	freeGLResources(): void;

	initWithCgImageForceRGB(cgImage: any, forceRGB: boolean): this;
}

declare class PESDKTheme extends NSObject {

	static alloc(): PESDKTheme; // inherited from NSObject

	static new(): PESDKTheme; // inherited from NSObject

	backgroundColor: UIColor;

	boundingBoxSnapGuideColor: UIColor;

	menuBackgroundColor: UIColor;

	positionSnapGuideColor: UIColor;

	primaryColor: UIColor;

	rotationSnapGuideColor: UIColor;

	tintColor: UIColor;

	toolbarBackgroundColor: UIColor;

	static readonly dark: PESDKTheme;

	static readonly dynamic: PESDKTheme;

	static readonly light: PESDKTheme;

	constructor(o: { backgroundColor: UIColor; menuBackgroundColor: UIColor; toolbarBackgroundColor: UIColor; primaryColor: UIColor; });

	initWithBackgroundColorMenuBackgroundColorToolbarBackgroundColorPrimaryColor(backgroundColor: UIColor, menuBackgroundColor: UIColor, toolbarBackgroundColor: UIColor, primaryColor: UIColor): this;
}

declare class PESDKTintFilter extends CIFilter {

	static alloc(): PESDKTintFilter; // inherited from NSObject

	static new(): PESDKTintFilter; // inherited from NSObject

	inputColor: UIColor;

	inputImage: CIImage;
}

declare class PESDKTool extends NSObject {

	static alloc(): PESDKTool; // inherited from NSObject

	static new(): PESDKTool; // inherited from NSObject

	readonly moved: boolean;

	gestureBeganIn(recognizer: UIGestureRecognizer, view: UIView): void;

	gestureCancelledIn(recognizer: UIGestureRecognizer, view: UIView): void;

	gestureEndedIn(recognizer: UIGestureRecognizer, view: UIView): void;

	gestureMovedIn(recognizer: UIGestureRecognizer, view: UIView): void;
}

declare class PESDKToolControllerOptions extends NSObject {

	static alloc(): PESDKToolControllerOptions; // inherited from NSObject

	static new(): PESDKToolControllerOptions; // inherited from NSObject

	readonly applyButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly didEnterToolClosure: () => void;

	readonly discardButtonConfigurationClosure: (p1: PESDKButton) => void;

	readonly menuBackgroundColor: UIColor;

	readonly titleViewConfigurationClosure: (p1: UIView) => void;

	readonly willLeaveToolClosure: () => void;

	constructor(o: { editorBuilder: PESDKToolControllerOptionsBuilder; });

	initWithEditorBuilder(editorBuilder: PESDKToolControllerOptionsBuilder): this;
}

declare class PESDKToolControllerOptionsBuilder extends NSObject {

	static alloc(): PESDKToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKToolControllerOptionsBuilder; // inherited from NSObject

	applyButtonConfigurationClosure: (p1: PESDKButton) => void;

	didEnterToolClosure: () => void;

	discardButtonConfigurationClosure: (p1: PESDKButton) => void;

	menuBackgroundColor: UIColor;

	titleViewConfigurationClosure: (p1: UIView) => void;

	willLeaveToolClosure: () => void;

	constructor(o: { editorOptions: PESDKToolControllerOptions; });

	initWithEditorOptions(editorOptions: PESDKToolControllerOptions): this;
}

declare class PESDKToolListSectionController extends PESDKMenuListSectionController {

	static alloc(): PESDKToolListSectionController; // inherited from NSObject

	static new(): PESDKToolListSectionController; // inherited from NSObject
}

declare class PESDKToolMenuItem extends NSObject implements PESDKMenuItem {

	static alloc(): PESDKToolMenuItem; // inherited from NSObject

	static createAdjustToolItem(): PESDKToolMenuItem;

	static createBrushToolItem(): PESDKToolMenuItem;

	static createFilterToolItem(): PESDKToolMenuItem;

	static createFocusToolItem(): PESDKToolMenuItem;

	static createFrameToolItem(): PESDKToolMenuItem;

	static createOverlayToolItem(): PESDKToolMenuItem;

	static createStickerToolItem(): PESDKToolMenuItem;

	static createTextDesignToolItem(): PESDKToolMenuItem;

	static createTextToolItem(): PESDKToolMenuItem;

	static createTransformToolItem(): PESDKToolMenuItem;

	static createTrimToolItem(): PESDKToolMenuItem;

	static new(): PESDKToolMenuItem; // inherited from NSObject

	static sectionControllerType(): typeof NSObject;

	readonly icon: UIImage;

	readonly supportsPhoto: boolean;

	readonly supportsVideo: boolean;

	readonly title: string;

	readonly toolControllerClass: typeof NSObject;

	readonly diffIdentifier: NSObjectProtocol; // inherited from PESDKDiffable

	static readonly sectionControllerType: typeof NSObject; // inherited from PESDKMenuItem

	constructor(o: { title: string; icon: UIImage; toolControllerClass: typeof NSObject; });

	constructor(o: { title: string; icon: UIImage; toolControllerClass: typeof NSObject; supportsPhoto: boolean; supportsVideo: boolean; });

	initWithTitleIconToolControllerClass(title: string, icon: UIImage, toolControllerClass: typeof NSObject): this;

	initWithTitleIconToolControllerClassSupportsPhotoSupportsVideo(title: string, icon: UIImage, toolControllerClass: typeof NSObject, supportsPhoto: boolean, supportsVideo: boolean): this;

	isEqualToDiffableObject(object: PESDKDiffable): boolean;
}

declare class PESDKToolbar extends UIView {

	static alloc(): PESDKToolbar; // inherited from NSObject

	static appearance(): PESDKToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKToolbar; // inherited from UIAppearance

	static new(): PESDKToolbar; // inherited from NSObject

	readonly contentView: UIView;

	items: NSArray<PESDKToolbarItem>;

	popToolbarItemAnimated(animated: boolean): PESDKToolbarItem;

	pushToolbarItemAnimated(item: PESDKToolbarItem, animated: boolean): void;

	setItemsAnimated(items: NSArray<PESDKToolbarItem> | PESDKToolbarItem[], animated: boolean): void;
}

declare class PESDKToolbarButton extends PESDKButton {

	static alloc(): PESDKToolbarButton; // inherited from NSObject

	static appearance(): PESDKToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKToolbarButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKToolbarButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKToolbarButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKToolbarButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): PESDKToolbarButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): PESDKToolbarButton; // inherited from UIButton

	static new(): PESDKToolbarButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): PESDKToolbarButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): PESDKToolbarButton; // inherited from UIButton

	width: number;

	setEnabledAnimated(enabled: boolean, animated: boolean): void;
}

declare class PESDKToolbarItem extends NSObject {

	static alloc(): PESDKToolbarItem; // inherited from NSObject

	static new(): PESDKToolbarItem; // inherited from NSObject

	leadingButton: PESDKToolbarButton;

	titleView: UIView;

	trailingButton: PESDKToolbarButton;
}

declare class PESDKTooltipSlider extends PESDKSlider {

	static alloc(): PESDKTooltipSlider; // inherited from NSObject

	static appearance(): PESDKTooltipSlider; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKTooltipSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKTooltipSlider; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTooltipSlider; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKTooltipSlider; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKTooltipSlider; // inherited from UIAppearance

	static new(): PESDKTooltipSlider; // inherited from NSObject

	readonly tooltip: PESDKSliderTooltip;
}

declare class PESDKTouchingGestureRecognizer extends UIGestureRecognizer {

	static alloc(): PESDKTouchingGestureRecognizer; // inherited from NSObject

	static new(): PESDKTouchingGestureRecognizer; // inherited from NSObject
}

declare class PESDKTransformEditController extends PESDKViewController implements PESDKCropAndStraightenViewDelegate, PESDKScalePickerDelegate, UIGestureRecognizerDelegate {

	static alloc(): PESDKTransformEditController; // inherited from NSObject

	static new(): PESDKTransformEditController; // inherited from NSObject

	boxedPhotoEditModel: PESDKPhotoEditModel;

	canRotateUsingGesture: boolean;

	cropAspect: PESDKCropAspect;

	readonly cropCanvasView: UIView;

	readonly cropOverlayView: PESDKCropOverlayView;

	readonly cropView: PESDKCropAndStraightenView;

	delegate: PESDKTransformEditControllerDelegate;

	readonly flipButton: PESDKButton;

	readonly gradientLayer: CAGradientLayer;

	readonly isModelChangeLocal: boolean;

	readonly preferredPreviewViewInsets: UIEdgeInsets;

	readonly rotateButton: PESDKButton;

	readonly rotationGestureRecognizer: UIRotationGestureRecognizer;

	readonly scalePicker: PESDKScalePicker;

	readonly scalePickerContainerView: PESDKMenuAccessoryContainerView;

	showControls: boolean;

	straightenAngle: number;

	viewCropRect: CGRect;

	readonly wantsDefaultPreviewView: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	cropAndStraightenViewDidEndTracking(cropAndStraightenView: PESDKCropAndStraightenView): void;

	cropAndStraightenViewDidTrack(cropAndStraightenView: PESDKCropAndStraightenView): void;

	cropAndStraightenViewWillBeginTracking(cropAndStraightenView: PESDKCropAndStraightenView): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scalePickerDidChangeValue(value: number, scalePicker: PESDKScalePicker): void;

	self(): this;

	setCropAspectAnimated(cropAspect: PESDKCropAspect, animated: boolean): void;

	setStraightenAngleAnimatedCompletion(straightenAngle: number, animated: boolean, completion: () => void): void;

	setViewCropRectNormalizedImageRectAnimated(viewCropRect: CGRect, normalizedImageRect: CGRect, animated: boolean): void;
}

interface PESDKTransformEditControllerDelegate {

	transformEditControllerBaseCIImage(transformEditController: PESDKTransformEditController): CIImage;

	transformEditControllerBaseImage(transformEditController: PESDKTransformEditController): UIImage;

	transformEditControllerDidChangeOrientation?(transformEditController: PESDKTransformEditController): void;

	transformEditControllerDidChangePreferredPreviewViewInsetsAnimated(transformEditController: PESDKTransformEditController, animated: boolean): void;

	transformEditControllerDidChangeWantsDefaultPreviewView(transformEditController: PESDKTransformEditController): void;

	transformEditControllerSpriteViewController(transformEditController: PESDKTransformEditController): PESDKSpriteViewController;
}
declare var PESDKTransformEditControllerDelegate: {

	prototype: PESDKTransformEditControllerDelegate;
};

declare class PESDKTransformModel extends NSObject {

	static alloc(): PESDKTransformModel; // inherited from NSObject

	static new(): PESDKTransformModel; // inherited from NSObject

	readonly adjustedStraightenAngle: number;

	appliedOrientation: PESDKOrientation;

	imageInsets: UIEdgeInsets;

	readonly isGeometryIdentity: boolean;

	normalizedCropRect: CGRect;

	straightenAngle: number;

	static readonly identityNormalizedCropRect: CGRect;

	static readonly identityOrientation: PESDKOrientation;

	constructor(o: { appliedOrientation: PESDKOrientation; normalizedCropRect: CGRect; straightenAngle: number; imageInsets: UIEdgeInsets; });

	initWithAppliedOrientationNormalizedCropRectStraightenAngleImageInsets(appliedOrientation: PESDKOrientation, normalizedCropRect: CGRect, straightenAngle: number, imageInsets: UIEdgeInsets): this;
}

declare class PESDKTransformToolController extends PESDKMenuToolController implements PESDKTransformEditControllerDelegate {

	static alloc(): PESDKTransformToolController; // inherited from NSObject

	static new(): PESDKTransformToolController; // inherited from NSObject

	readonly transformEditController: PESDKTransformEditController;

	transformEditControllerBaseCIImage(transformEditController: PESDKTransformEditController): CIImage;

	transformEditControllerBaseImage(transformEditController: PESDKTransformEditController): UIImage;

	transformEditControllerDidChangeOrientation(transformEditController: PESDKTransformEditController): void;

	transformEditControllerDidChangePreferredPreviewViewInsetsAnimated(transformEditController: PESDKTransformEditController, animated: boolean): void;

	transformEditControllerDidChangeWantsDefaultPreviewView(transformEditController: PESDKTransformEditController): void;

	transformEditControllerSpriteViewController(transformEditController: PESDKTransformEditController): PESDKSpriteViewController;
}

declare class PESDKTransformToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTransformToolControllerOptions; // inherited from NSObject

	static new(): PESDKTransformToolControllerOptions; // inherited from NSObject

	readonly allowFreeCrop: boolean;

	readonly allowedCropAspects: NSArray<PESDKCropAspect>;

	readonly cropAspectButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKCropAspect) => void;

	readonly cropAspectSelectedClosure: (p1: PESDKCropAspect) => void;

	readonly scalePickerConfigurationClosure: (p1: PESDKScalePicker) => void;

	readonly scalePickerContainerViewConfigurationClosure: (p1: UIView) => void;

	readonly showResetButton: boolean;

	readonly transformButtonConfigurationClosure: (p1: PESDKButton, p2: TransformAction) => void;

	constructor(o: { builder: PESDKTransformToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTransformToolControllerOptionsBuilder): this;
}

declare class PESDKTransformToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTransformToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTransformToolControllerOptionsBuilder; // inherited from NSObject

	allowFreeCrop: boolean;

	allowedCropRatios: NSArray<PESDKCropAspect>;

	cropAspectButtonConfigurationClosure: (p1: PESDKMenuCollectionViewCell, p2: PESDKCropAspect) => void;

	cropAspectSelectedClosure: (p1: PESDKCropAspect) => void;

	scalePickerConfigurationClosure: (p1: PESDKScalePicker) => void;

	scalePickerContainerViewConfigurationClosure: (p1: UIView) => void;

	showResetButton: boolean;

	transformButtonConfigurationClosure: (p1: PESDKButton, p2: TransformAction) => void;

	constructor(o: { options: PESDKTransformToolControllerOptions; });

	initWithOptions(options: PESDKTransformToolControllerOptions): this;
}

declare class PESDKTrimModel extends NSObject {

	static alloc(): PESDKTrimModel; // inherited from NSObject

	static new(): PESDKTrimModel; // inherited from NSObject
}

declare class PESDKTrimToolController extends PESDKPhotoEditToolController implements PESDKProxyZoomControllerDelegate, PESDKVideoTrimViewDelegate {

	static alloc(): PESDKTrimToolController; // inherited from NSObject

	static new(): PESDKTrimToolController; // inherited from NSObject

	readonly controlsContainerView: PESDKMenuAccessoryContainerView;

	readonly currentTimeLabel: PESDKDimmedLabel;

	readonly durationLabel: PESDKPrimaryLabel;

	readonly playPauseButton: PESDKButton;

	readonly proxyZoomController: PESDKProxyZoomController;

	readonly trimView: PESDKVideoTrimView;

	readonly trimViewContainerView: PESDKMenuAccessoryContainerView;

	trimViewHeight: number;

	proxyZoomControllerDidEndZooming(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerDidScroll(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerDidZoom(proxyZoomController: PESDKProxyZoomController): void;

	proxyZoomControllerTargetScrollView(proxyZoomController: PESDKProxyZoomController): UIScrollView;

	proxyZoomControllerWillBeginZooming(proxyZoomController: PESDKProxyZoomController): void;

	videoTrimViewDidChangeEndTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidChangeStartTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidDragScrubberTo(videoTrimView: PESDKVideoTrimView, time: CMTime): void;

	videoTrimViewDidStartDraggingScrubber(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStartDraggingStartOrEndTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStopDraggingScrubber(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStopDraggingStartOrEndTime(videoTrimView: PESDKVideoTrimView): void;
}

declare class PESDKTrimToolControllerOptions extends PESDKToolControllerOptions {

	static alloc(): PESDKTrimToolControllerOptions; // inherited from NSObject

	static new(): PESDKTrimToolControllerOptions; // inherited from NSObject

	constructor(o: { builder: PESDKTrimToolControllerOptionsBuilder; });

	initWithBuilder(builder: PESDKTrimToolControllerOptionsBuilder): this;
}

declare class PESDKTrimToolControllerOptionsBuilder extends PESDKToolControllerOptionsBuilder {

	static alloc(): PESDKTrimToolControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKTrimToolControllerOptionsBuilder; // inherited from NSObject

	constructor(o: { options: PESDKTrimToolControllerOptions; });

	initWithOptions(options: PESDKTrimToolControllerOptions): this;
}

declare class PESDKUndoController extends NSObject {

	static alloc(): PESDKUndoController; // inherited from NSObject

	static new(): PESDKUndoController; // inherited from NSObject

	readonly canRedo: boolean;

	readonly canRedoInCurrentGroup: boolean;

	readonly canUndo: boolean;

	readonly canUndoInCurrentGroup: boolean;

	isEnabled: boolean;

	readonly isRedoing: boolean;

	readonly isUndoing: boolean;

	beginUndoGrouping(): void;

	endUndoGrouping(): void;

	redo(): void;

	removeAllActions(): void;

	removeAllActionsInCurrentGroup(): void;

	undo(): void;

	undoAllInCurrentGroup(): void;

	undoGroup(): void;

	undoStep(): void;

	undoStepInCurrentGroup(): void;
}

declare class PESDKVideo extends NSObject {

	static alloc(): PESDKVideo; // inherited from NSObject

	static new(): PESDKVideo; // inherited from NSObject

	readonly asset: AVAsset;

	readonly size: CGSize;

	constructor(o: { asset: AVAsset; });

	constructor(o: { URL: NSURL; });

	initWithAsset(asset: AVAsset): this;

	initWithURL(url: NSURL): this;
}

declare class PESDKVideoCodec extends NSObject {

	static alloc(): PESDKVideoCodec; // inherited from NSObject

	static h264WithBitRate(bitRate: number): PESDKVideoCodec;

	static h264WithBitRateProfile(bitRate: number, profile: number): PESDKVideoCodec;

	static hevcWithQuality(quality: number): PESDKVideoCodec;

	static new(): PESDKVideoCodec; // inherited from NSObject
}

declare const enum PESDKVideoCodecProfileH264 {

	BaselineAutoLevel = 0,

	BaselineLevel30 = 1,

	BaselineLevel31 = 2,

	BaselineLevel41 = 3,

	MainAutoLevel = 4,

	MainLevel30 = 5,

	MainLevel31 = 6,

	MainLevel32 = 7,

	MainLevel41 = 8,

	HighAutoLevel = 9,

	HighLevel40 = 10,

	HighLevel41 = 11
}

declare const enum PESDKVideoContainerFormat {

	Mp4 = 0,

	Mov = 1
}

declare class PESDKVideoEditPreviewController extends PESDKMediaEditPreviewController {

	static alloc(): PESDKVideoEditPreviewController; // inherited from NSObject

	static new(): PESDKVideoEditPreviewController; // inherited from NSObject

	readonly video: PESDKVideo;

	constructor(o: { videoAsset: PESDKVideo; photoEditModel: PESDKPhotoEditModel; });

	initWithVideoAssetPhotoEditModel(videoAsset: PESDKVideo, photoEditModel: PESDKPhotoEditModel): this;
}

declare class PESDKVideoEditViewController extends PESDKMediaEditViewController {

	static alloc(): PESDKVideoEditViewController; // inherited from NSObject

	static new(): PESDKVideoEditViewController; // inherited from NSObject

	delegate: PESDKVideoEditViewControllerDelegate;

	readonly serializedSettings: NSData;

	constructor(o: { videoAsset: PESDKVideo; configuration: PESDKConfiguration; });

	constructor(o: { videoAsset: PESDKVideo; configuration: PESDKConfiguration; photoEditModel: PESDKPhotoEditModel; });

	initWithVideoAssetConfiguration(videoAsset: PESDKVideo, configuration: PESDKConfiguration): this;

	initWithVideoAssetConfigurationPhotoEditModel(videoAsset: PESDKVideo, configuration: PESDKConfiguration, photoEditModel: PESDKPhotoEditModel): this;
}

interface PESDKVideoEditViewControllerDelegate extends PESDKMediaEditViewControllerDelegate {

	videoEditViewControllerDidCancel(videoEditViewController: PESDKVideoEditViewController): void;

	videoEditViewControllerDidFailToGenerateVideo(videoEditViewController: PESDKVideoEditViewController): void;

	videoEditViewControllerDidFinishWithVideoAtURL(videoEditViewController: PESDKVideoEditViewController, url: NSURL): void;
}
declare var PESDKVideoEditViewControllerDelegate: {

	prototype: PESDKVideoEditViewControllerDelegate;
};

declare class PESDKVideoEditViewControllerOptions extends PESDKMediaEditViewControllerOptions {

	static alloc(): PESDKVideoEditViewControllerOptions; // inherited from NSObject

	static new(): PESDKVideoEditViewControllerOptions; // inherited from NSObject

	readonly exportURL: NSURL;

	readonly videoCodec: PESDKVideoCodec;

	readonly videoContainerFormat: PESDKVideoContainerFormat;

	readonly videoContainerFormatUTI: string;

	constructor(o: { videoEditBuilder: PESDKVideoEditViewControllerOptionsBuilder; });

	initWithVideoEditBuilder(videoEditBuilder: PESDKVideoEditViewControllerOptionsBuilder): this;
}

declare class PESDKVideoEditViewControllerOptionsBuilder extends PESDKMediaEditViewControllerOptionsBuilder {

	static alloc(): PESDKVideoEditViewControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKVideoEditViewControllerOptionsBuilder; // inherited from NSObject

	exportURL: NSURL;

	videoCodec: PESDKVideoCodec;

	videoContainerFormat: PESDKVideoContainerFormat;

	constructor(o: { videoEditOptions: PESDKVideoEditViewControllerOptions; });

	initWithVideoEditOptions(videoEditOptions: PESDKVideoEditViewControllerOptions): this;
}

declare class PESDKVideoRecordButton extends UIControl {

	static alloc(): PESDKVideoRecordButton; // inherited from NSObject

	static appearance(): PESDKVideoRecordButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKVideoRecordButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKVideoRecordButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoRecordButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKVideoRecordButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoRecordButton; // inherited from UIAppearance

	static new(): PESDKVideoRecordButton; // inherited from NSObject

	isRecording: boolean;

	outlineColor: UIColor;
}

declare class PESDKVideoScrubberView extends UIView {

	static alloc(): PESDKVideoScrubberView; // inherited from NSObject

	static appearance(): PESDKVideoScrubberView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKVideoScrubberView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKVideoScrubberView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoScrubberView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKVideoScrubberView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoScrubberView; // inherited from UIAppearance

	static new(): PESDKVideoScrubberView; // inherited from NSObject
}

declare class PESDKVideoTrimSelectionView extends UIView {

	static alloc(): PESDKVideoTrimSelectionView; // inherited from NSObject

	static appearance(): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoTrimSelectionView; // inherited from UIAppearance

	static new(): PESDKVideoTrimSelectionView; // inherited from NSObject

	asset: AVAsset;

	delegate: PESDKVideoTrimSelectionViewDelegate;

	handleWidth: number;

	inactiveColor: UIColor;

	readonly leftHandle: UIView;

	readonly rightHandle: UIView;
}

interface PESDKVideoTrimSelectionViewDelegate {

	videoTrimSelectionViewDidChangeEndTime(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidChangeStartTime(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidStartDragging(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidStopDragging(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;
}
declare var PESDKVideoTrimSelectionViewDelegate: {

	prototype: PESDKVideoTrimSelectionViewDelegate;
};

declare class PESDKVideoTrimView extends UIView implements PESDKVideoTrimSelectionViewDelegate {

	static alloc(): PESDKVideoTrimView; // inherited from NSObject

	static appearance(): PESDKVideoTrimView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PESDKVideoTrimView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PESDKVideoTrimView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoTrimView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PESDKVideoTrimView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PESDKVideoTrimView; // inherited from UIAppearance

	static new(): PESDKVideoTrimView; // inherited from NSObject

	asset: AVAsset;

	delegate: PESDKVideoTrimViewDelegate;

	thumbnailWidth: number;

	pause(): void;

	play(): void;

	videoTrimSelectionViewDidChangeEndTime(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidChangeStartTime(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidStartDragging(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;

	videoTrimSelectionViewDidStopDragging(videoTrimSelectionView: PESDKVideoTrimSelectionView): void;
}

interface PESDKVideoTrimViewDelegate {

	videoTrimViewDidChangeEndTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidChangeStartTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidDragScrubberTo(videoTrimView: PESDKVideoTrimView, time: CMTime): void;

	videoTrimViewDidStartDraggingScrubber(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStartDraggingStartOrEndTime(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStopDraggingScrubber(videoTrimView: PESDKVideoTrimView): void;

	videoTrimViewDidStopDraggingStartOrEndTime(videoTrimView: PESDKVideoTrimView): void;
}
declare var PESDKVideoTrimViewDelegate: {

	prototype: PESDKVideoTrimViewDelegate;
};

declare class PESDKViewController extends UIViewController {

	static alloc(): PESDKViewController; // inherited from NSObject

	static new(): PESDKViewController; // inherited from NSObject
}

interface PESDKWeatherProvider {

	temperature: PESDKTemperature;

	temperatureFormat: PESDKTemperatureFormat;

	updateData(): void;
}
declare var PESDKWeatherProvider: {

	prototype: PESDKWeatherProvider;
};

declare const enum RecordingMode {

	Photo = 0,

	Video = 1
}

declare const enum RecordingOrientation {

	Portrait = 0,

	PortraitBottomUp = 1,

	LandscapeBottomLeft = 2,

	LandscapeBottomRight = 3
}

declare const enum StickerAction {

	Color = 0,

	Straighten = 1,

	Brightness = 2,

	Contrast = 3,

	Saturation = 4,

	Replace = 5,

	Opacity = 6
}

declare const enum StickerOverlayAction {

	Add = 0,

	Delete = 1,

	Undo = 2,

	Redo = 3,

	Flip = 4,

	BringToFront = 5
}

declare const enum TextAction {

	SelectFont = 0,

	SelectColor = 1,

	SelectBackgroundColor = 2,

	SelectAlignment = 3,

	Straighten = 4
}

declare const enum TextColorToolControllerMode {

	Foreground = 0,

	Background = 1
}

declare const enum TextDesignOverlayAction {

	Invert = 0,

	Delete = 1,

	Undo = 2,

	Redo = 3,

	BringToFront = 4,

	Add = 5
}

declare const enum TextOverlayAction {

	Add = 0,

	Delete = 1,

	Undo = 2,

	Redo = 3,

	Flip = 4,

	BringToFront = 5
}

declare const enum TransformAction {

	RotateLeft = 0,

	FlipHorizontally = 1,

	Straighten = 2
}

declare class VESDK extends IMGLY {

	static alloc(): VESDK; // inherited from NSObject

	static new(): VESDK; // inherited from NSObject
}
