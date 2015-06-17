module ymaps{
    export module interfaces{
        export module vow {
            declare class Deferred {
                promise():interfaces.vow.Promise;
                reject(reason:any):void;
                resolve(value:any):void;
            }
        }
    }
}