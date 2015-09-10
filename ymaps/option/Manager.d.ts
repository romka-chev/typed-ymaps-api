namespace ymaps.option {

    interface ManagerStatic {
        new (options?:any, parent?:interfaces.IOptionManager, name?:string):Manager;
    }
    interface Manager extends interfaces.IOptionManager {
        set(hash:Object):Manager;
        set(key:string, value:any):Manager;
        unset(keys:string|string[]):Manager;
        unsetAll():Manager;
    }

    declare var Manager:ManagerStatic;
}