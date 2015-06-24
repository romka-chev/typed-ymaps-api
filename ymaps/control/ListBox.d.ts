module ymaps {
    export module control {
        export class ListBox extends interfaces.ICollection, interfaces.IControl, interfaces.ICustomizable {

            data:ListBoxDataManager;
            state:ListBoxStateManager;

            constructor(parameters?:ListBoxParameters);

            collapse():ListBox;
            expand():ListBox;
            getMap():Map;
            isExpanded():boolean;
        }
        export class ListBoxParameters{
            data    :ListBoxParametersData;
            items   :interfaces.IControl[];
            options :ListBoxParametersOptions;
            state   :ListBoxParametersState;
        }
        export class ListBoxParametersData{
            content:string;
            image:string;
            title:string;
        }
        export class ListBoxParametersOptions{
            collapseOnBlur  :boolean  = true;
            expandOnClick   :boolean  = true;
            float           :"left"|"right"|"none"  = "right";
            floatIndex      :number                 = 0;
            layout          :string|Function;
            maxWidth        :number|number[]        = 90;
            popupFloat      :"left"|"right";
            position        :ListBoxParametersOptionsPosition;
            visible         :boolean                = true;
        }
        export class ListBoxParametersOptionsPosition{
            bottom  :number|string = "auto";
            left    :number|string = "auto";
            top     :number|string = "auto";
            right   :number|string = "auto";
        }
        export class ListBoxParametersState{
            expanded:boolean = false;
        }

        class ListBoxDataManager extends data.Manager{
            get<T>(path:"content", defaultValue?:T):T|string;
            get<T>(path:"title",   defaultValue?:T):T|string;
        }
        class ListBoxStateManager extends data.Manager{
            get<T>(path:"expanded", defaultValue?:T):T|boolean;
            get<T>(path:"size",     defaultValue?:T):T|string; // todo check return
        }
    }
}