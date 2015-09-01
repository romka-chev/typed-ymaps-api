module ymaps {
    export module util {
        export class Storage {
            add(key:string, object:any):Storage;
            // todo check for Object type. Maybe wrong?
            get(key:string|Object):any;
            remove(key:string):Storage;
        }
    }
}