namespace ymaps.behavior {

    interface RightMouseButtonMagnifierStatic {
        new(options?:RightMouseButtonMagnifierOptions):RightMouseButtonMagnifier;
    }
    interface RightMouseButtonMagnifier extends ymaps.interfaces.IBehavior {
    }
    interface RightMouseButtonMagnifierOptions {
        actionCursor?:string;
        duration    ?:number;
    }


    declare var RightMouseButtonMagnifier:RightMouseButtonMagnifierStatic;
    declare var defaultRightMouseButtonMagnifierOptions:RightMouseButtonMagnifierOptions = {
        actionCursor: 'crosshair',
        duration    : 300
    }
}