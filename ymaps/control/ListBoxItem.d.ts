namespace ymaps.control {

    interface ListBoxItemStatic {
        new(parameters:string|ListBoxItemParameters):ListBoxItemParameters;
    }
    interface ListBoxItem extends interfaces.ICustomizable, interfaces.ISelectableControl {

        data:ymaps.data.Manager;
        state:ymaps.data.Manager;

        getMap():Map;
    }

    interface ListBoxItemParameters {
        data   ?:ListBoxItemParametersData;
        items  ?:interfaces.IControl[];
        options?:ListBoxItemParametersOptions;
        state  ?:ListBoxItemParametersState;
    }
    interface ListBoxItemParametersData {
        content?:string;
    }
    interface ListBoxItemParametersOptions {
        layout          ?:string|Function; // todo constructor
        selectableLayout?:string|Function;
        selectOnClick   ?:boolean;
        separatorLayout ?:string|Function;
        expandOnClick   ?:boolean;
        type            ?:"selectable"|"separator";
        visible         ?:boolean;
    }
    interface ListBoxItemParametersState {
        selected?:boolean;
    }

    declare var ListBoxItem:ListBoxItemStatic;
    declare var defaultListBoxItemParameters:ListBoxItemParameters = {
        options: {
            layout          : "islands#listBoxItemLayout",
            selectableLayout: "islands#listBoxItemSelectableLayout",
            selectOnClick   : true,
            separatorLayout : "islands#listBoxItemSeparatorLayout",
            expandOnClick   : true,
            type            : "selectable",
            visible         : true
        },
        state  : {
            selected: false
        }
    }
}