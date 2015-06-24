module ymaps {
    export module control {
        export class ListBoxItem extends interfaces.ICustomizable, interfaces.ISelectableControl {

            state:state.Manager;
            data:data.Manager;

            constructor(parameters?:string|ListBoxItemParameters);

            getMap():Map;
        }
        export class ListBoxItemParameters {
            data:ListBoxItemParametersData;
            items:interfaces.IControl[];
            options:ListBoxItemParametersOptions;
            state:ListBoxItemParametersState;
        }
        export class ListBoxItemParametersData {
            content:string;
        }
        export class ListBoxItemParametersOptions {
            layout:string|Function           = "islands#listBoxItemLayout";
            selectableLayout:string|Function = "islands#listBoxItemSelectableLayout";
            selectOnClick:boolean            = true;
            separatorLayout:string|Function  = "islands#listBoxItemSeparatorLayout";
            expandOnClick:boolean            = true;
            type:"selectable"|"separator"    = "selectable";
            visible:boolean                  = true;
        }
        export class ListBoxItemParametersState {
            selected:boolean = false;
        }
    }
}