module ymaps {
    export module control {
        export class ListBoxItem extends interfaces.ICustomizable, interfaces.ISelectableControl {

            data:ListBoxItemDataManager;
            state:ListBoxItemStateManager;

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

        class ListBoxItemDataManager extends data.Manager{
            get<T>(path:"content", defaultValue?:T):T|string;
            get<T>(path:"title",   defaultValue?:T):T|string;
        }
        class ListBoxItemStateManager extends data.Manager{
            get<T>(path:"selected", defaultValue?:T):T|boolean;
            get<T>(path:"enabled",  defaultValue?:T):T|boolean;
        }
    }
}