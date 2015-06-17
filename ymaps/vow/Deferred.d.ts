module ymaps {
    export module vow {
        export class Deferred {
            promise():Promise;

            reject(reason:any):void;

            resolve(value:any):void;
        }
    }
}