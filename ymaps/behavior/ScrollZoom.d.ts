namespace ymaps.behavior {

    interface ScrollZoomStatic {
        new(options:ScrollZoomOptions = defaultScrollZoomOptions):ScrollZoom;
    }

    interface ScrollZoom extends ymaps.interfaces.IBehavior {
    }
    interface ScrollZoomOptions {
        maximumDelta?:number;
        speed       ?:number;
    }


    declare var ScrollZoom:ScrollZoomStatic;
    declare var defaultScrollZoomOptions:ScrollZoomOptions = {
        maximumDelta: 5,
        speed       : 5
    }
}