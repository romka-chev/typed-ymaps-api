module ymaps {
    export module layer {
        class storage extends util.Storage{
            static add(key:string, object:any):util.Storage;
            static get(key:string):any;
            static remove(key:string):util.Storage;
        }
        export var storage:storage;
    }
}