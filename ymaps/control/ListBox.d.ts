namespace ymaps.control {

    interface ListBoxStatic {
        new(parameters:ListBoxParameters = defaultListBoxParameters):ListBox;
    }
    interface ListBox extends ymaps.interfaces.ICollection, ymaps.interfaces.IControl, ymaps.interfaces.ICustomizable {

        data:ymaps.data.Manager;
        state:ymaps.data.Manager;

        collapse():ListBox;
        expand():ListBox;
        getMap():Map;
        isExpanded():boolean;
    }
    interface ListBoxParameters {
        data    ?:ListBoxParametersData;
        items   ?:interfaces.IControl[];
        options ?:ListBoxParametersOptions;
        state   ?:ListBoxParametersState;
    }
    interface ListBoxParametersData {
        content ?:string;
        image   ?:string;
        title   ?:string;
    }
    interface ListBoxParametersOptions {
        collapseOnBlur  ?:boolean;
        expandOnClick   ?:boolean;
        float           ?:ymaps.Float;
        floatIndex      ?:number;
        layout          ?:string|Function;
        maxWidth        ?:number|number[];
        popupFloat      ?:ymaps.PopupFloat;
        position        ?:ListBoxParametersOptionsPosition;
        visible         ?:boolean;
    }
    interface ListBoxParametersOptionsPosition {
        bottom  ?:number|string;
        left    ?:number|string;
        top     ?:number|string;
        right   ?:number|string;
    }
    export class ListBoxParametersState {
        expanded:boolean = false;
    }

    declare var ListBox:ListBoxStatic;
    declare var defaultListBoxParameters:ListBoxParameters = {
        options: {
            collapseOnBlur: true,
            expandOnClick : true,
            float         : "right",
            floatIndex    : 0,
            maxWidth      : 90,
            position      : {
                bottom: "auto",
                left  : "auto",
                top   : "auto",
                right : "auto"
            },
            visible       : true
        }
    }

}