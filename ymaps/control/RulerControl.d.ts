namespace ymaps.control {

    interface RulerControlStatic {
        new(parameters:RulerControlParameters = defaultRulerControlParameters):RulerControl;
    }
    interface RulerControl extends Button {
    }

    interface RulerControlParameters {
        data   ?:RulerControlParametersData;
        options?:RulerControlParametersOptions;
        state  ?:RulerControlParametersState;
    }
    interface RulerControlParametersData {
    }
    interface RulerControlParametersOptions {
        position ?:RulerControlParametersOptionsPosition;
        scaleLine?:boolean;
        visible  ?:boolean;
    }
    interface RulerControlParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface RulerControlParametersState {
    }

    declare var RulerControl:RulerControlStatic;
    declare var defaultRulerControlParameters:RulerControlParameters = {
        options: {
            position : {
                top   : "auto",
                right : 10,
                bottom: 30,
                left  : "auto",
            },
            scaleLine: true,
            visible  : true
        }
    }
}