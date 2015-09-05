namespace ymaps.behaviour {

    interface MultiTouchStatic {
        new(options:MultiTouchOptions = defaultMultiTouchOptions):MultiTouch;
    }
    interface MultiTouch extends ymaps.interfaces.IBehavior {
    }
    interface MultiTouchOptions {
        tremor?:number;
    }


    declare var MultiTouch:MultiTouchStatic;
    declare var defaultMultiTouchOptions:MultiTouchOptions = {
        tremor: 2
    }
}