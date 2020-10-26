import { Common } from './videoeditors.common';
import * as frameModule from "tns-core-modules/ui/frame/frame";

export class Videoeditors extends Common {

  test() {
    console.log("On ios plugin");
    let cameraViewController = PESDKCameraViewController.alloc().init();

    let frame: typeof frameModule = require("tns-core-modules/ui/frame");

    let topMostFrame = frame.topmost();
    if (topMostFrame) {
      let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
      if (viewController) {
        while (viewController.parentViewController) {
          // find top-most view controler
          viewController = viewController.parentViewController;
        }

        while (viewController.presentedViewController) {
          // find last presented modal
          viewController = viewController.presentedViewController;
        }

        viewController.presentViewControllerAnimatedCompletion(cameraViewController, true, null);
      }
    }

    return "Test ios"
  }
}
