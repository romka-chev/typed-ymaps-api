namespace ymaps.map.pane {

    interface ManagerStatic {
        new(map:Map):Manager;
    }
    interface Manager {
        append(key:string, pane:interfaces.IPane):any;
        destroy():any;
        get(key:string):interfaces.IPane;
        getLower():string;
        getUpper():string;
        insertBefore(key:string, pane:interfaces.IPane, referenceKey:string):any;
        remove(pane:interfaces.IPane):any;
    }

    declare var Manager:ManagerStatic;
}