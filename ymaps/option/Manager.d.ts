module ymaps {
    export module option {
        class Manager extends interfaces.IOptionManager {

            constructor(options?:any, parent?:interfaces.IOptionManager, name?:string);

            set(hash:Object):Manager;
            set(key:string, value:any):Manager;

            unset(keys:string|string[]):Manager;

            unsetAll():Manager;

        }
    }
}