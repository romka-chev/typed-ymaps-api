namespace ymaps.behaviour {

    interface LeftMouseButtonMagnifierStatic {
        new(options:LeftMouseButtonMagnifierOptions = defaultLeftMouseButtonMagnifierOptions):LeftMouseButtonMagnifier;
    }
    interface LeftMouseButtonMagnifier extends ymaps.interfaces.IBehavior {
    }
    interface LeftMouseButtonMagnifierOptions {
        actionCursor?:string;
        cursor?:string;
        duration?:number;
    }


    declare var LeftMouseButtonMagnifier:LeftMouseButtonMagnifierStatic;
    declare var defaultLeftMouseButtonMagnifierOptions:LeftMouseButtonMagnifierOptions = {
        actionCursor: 'crosshair',
        cursor      : 'zoom',
        duration    : 300
    }
}