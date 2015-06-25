module ymaps {
    export module data {
        export class Manager extends interfaces.IDataManager, interfaces.IFreezable {
            constructor(data:any);

            get(path:string, defaultValue?:any):any;
            getAll():any;

            set(dictionary:{[key:string]:any}):Manager;
            set(path:string, value:any):Manager;
            setAll():Manager;

            unset(path:string|string[]):Manager;
            unsetAll():Manager;
        }
    }
}