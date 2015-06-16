module ymaps{
    export module interfaces{
        export module vow {
            export interface Deferred {
                promise():interfaces.vow.Promise;
                reject(reason:any):void;
                resolve(value:any):void;
            }
        }
    }
}