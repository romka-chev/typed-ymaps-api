namespace ymaps.control {

    interface FullscreenControlStatic {
        new(parameters:FullscreenControlParameters = defaultFullscreenControlParameters):FullscreenControlStatic;
    }
    interface FullscreenControl extends Button {
    }

    interface FullscreenControlParameters {
        data   ?:FullscreenControlParametersData;
        options?:FullscreenControlParametersOptions;
        state  ?:FullscreenControlParametersState;
    }
    interface FullscreenControlParametersData {
        title?:string;
    }
    interface FullscreenControlParametersOptions {
        float     ?:ymaps.Float;
        floatIndex?:number;
        maxWidth  ?:number|number[];
        visible   ?:boolean;
        layout    ?:string|interfaces.ISelectableControlLayout; // todo layout constructor
        position  ?:FullscreenControlParametersOptionsPosition;
    }
    interface FullscreenControlParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface FullscreenControlParametersState {
        enabled?:boolean;
        selected?:boolean;
    }

    declare var FullscreenControl:FullscreenControlStatic;
    declare var defaultFullscreenControlParameters:FullscreenControlParameters = {
        options: {
            float     : "right",
            floatIndex: 300,
            maxWidth  : 28,
            visible   : true,
            position  : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            }
        },
        state  : {
            enabled : true,
            selected: false
        }
    };
}