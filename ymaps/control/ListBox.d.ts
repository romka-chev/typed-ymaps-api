module ymaps {
    export module control {
        export class ListBox extends interfaces.ICollection, interfaces.IControl, interfaces.ICustomizable {

            state:state.Manager;
            data:data.Manager;

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
            content:string;
            image:string;
            title:string;
        }
        export class ListBoxParametersOptions{
            collapseOnBlur  :boolean  = true;
            expandOnClick   :boolean  = true;
            float           :"left"|"right"|"none"  = "right";
            floatIndex      :number                 = 0;
            layout          :string|interfaces.ISelectableControlLayout|interfaces.IGroupControlLayout|Function;
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
    }
}