module ymaps {
    export module interactivityModel {
        export class storage {
            static add(key:string, object:any):util.Storage;
            static get(key:string):any;
            static remove(key:string):util.Storage;
        }
    }
}