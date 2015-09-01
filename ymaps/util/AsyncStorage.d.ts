module ymaps {
    export module util {
        export class AsyncStorage extends util.Storage {

            // todo extract resolveCallback
            define(key:string, depends?:string[], resolveCallback?:(provide?:(value:any) => any, ...values:any[]) => any, context?:any);

            isDefined(key:string):boolean;

            // todo determine errorCallback argument
            require(keys:string|string[], successCallback?:(...values:any[]) => any, errorCallback?:(error?:any) => any, context?:any);
        }
    }
}