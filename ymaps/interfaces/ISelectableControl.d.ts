module ymaps {
    export module interfaces {
        export class ISelectableControl extends IControl {
            deselect():void;

            disable():void;

            enable():void;

            isEnabled():boolean;

            isSelected():boolean;

            select():void;
        }
    }
}