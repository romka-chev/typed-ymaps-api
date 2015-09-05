namespace ymaps.interfaces {
    interface ISelectableControl extends IControl {
        select():any;
        deselect():any;
        isSelected():boolean;
        enable():any;
        disable():any;
        isEnabled():boolean;
    }
}