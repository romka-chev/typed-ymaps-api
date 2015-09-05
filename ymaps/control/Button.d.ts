import Button = ymaps.control.Button;
namespace ymaps.control {

    interface ButtonStatic {
        new(parameters:ButtonParameters = defaultButtonParameters):Button;
    }
    interface Button extends interfaces.ICustomizable, interfaces.ISelectableControl {
        data:ymaps.data.Manager;
        state:ymaps.data.Manager;

        getMap():Map;
    }

    interface ButtonParameters {
        data   ?:ButtonParametersData;
        options?:ButtonParametersOptions;
        state  ?:ButtonParametersState;
    }
    interface ButtonParametersData {
        content ?:string;
        iconType?:string;
        image   ?:string;
        title   ?:string;
    }
    interface ButtonParametersOptions {
        float        ?:ymaps.Float;
        floatIndex   ?:number;
        layout       ?:string|interfaces.ISelectableControlLayout; // todo constructor
        maxWidth     ?:number|number[];
        position     ?:ButtonParametersOptionsPosition;
        selectOnClick?:boolean;
        size         ?:ymaps.Size;
        visible      ?:boolean;
    }
    interface ButtonParametersOptionsPosition {
        bottom?:number|string;
        left  ?:number|string;
        top   ?:number|string;
        right ?:number|string;
    }
    interface ButtonParametersState {
        enabled ?:boolean;
        selected?:boolean;
    }

    declare var Button:ButtonStatic;
    declare var defaultButtonParameters:ButtonParameters = {
        options: {
            float        : "right",
            floatIndex   : 0,
            maxWidth     : 50,
            position     : {
                bottom: "auto",
                left  : "auto",
                top   : "auto",
                right : "auto"
            },
            selectOnClick: true,
            size         : "auto",
            visible      : true
        },
        state  : {
            enabled : true,
            selected: false
        }
    };
}