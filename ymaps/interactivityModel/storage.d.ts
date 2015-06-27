module ymaps {
    export module interactivityModel {
        export class storage {
            add(key:string, object:any):util.Storage;
            get(key:string):any;
            remove(key:string):util.Storage;
        }
    }
}