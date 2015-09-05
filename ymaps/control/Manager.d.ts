namespace ymaps.control {

    interface ManagerStatic {
        new(map:ymaps.Map, controls?:ymaps.Controls[]|interfaces.IControl[], options:ManagerOptions = defaultManagerOptions):Manager;
    }
    interface Manager extends interfaces.ICustomizable, interfaces.ISelectableControl {
        state  :ymaps.data.Manager;

        each(callback:Function, context:any):Manager;
        add(control:ymaps.Controls|interfaces.IControl, options:MangerAddOptions = defaultMangerAddOptions):control.Manager;
        remove(control:ymaps.Controls|interfaces.IControl):Manager;
        get(index:number|ymaps.Controls):interfaces.IControl;
        indexOf(childToFind:ymaps.Controls|interfaces.IControl):number;
        getChildElement(control:interfaces.IControl):vow.Promise;
        getContainer():HTMLElement;
        getMap():Map;
    }

    interface ManagerOptions {
        margin?:number;
        pane  ?:interfaces.IPane;
        states?:string[];
    }

    interface MangerAddOptions {
        float     ?:ymaps.Float;
        floatIndex?:number;
        position  ?:MangerAddOptionsPosition;
    }
    interface MangerAddOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }

    declare var Manager:ManagerStatic;
    declare var defaultManagerOptions:ManagerOptions     = {
        margin: 10,
        states: ["small", "medium", "large"]
    };
    declare var defaultMangerAddOptions:MangerAddOptions = {
        float     : "right",
        floatIndex: 0,
        position  : {
            top   : "auto",
            right : "auto",
            bottom: "auto",
            left  : "auto",
        }
    };
}