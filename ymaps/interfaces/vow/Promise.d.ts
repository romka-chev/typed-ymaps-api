module ymaps {
    export module interfaces {
        export module vow {
            export interface Promise {
                new(resolved?:Function):Promise;

                done  (onFulfilled?:Function, onRejected?:Function, onProgress?:Function, ctx?:any):void;
                spread(onFulfilled?:Function, onRejected?:Function, ctx?:any):Promise;
                then  (onFulfilled?:Function, onRejected?:Function, onProgress?:Function, ctx?:any):Promise;

                valueOf():any;
            }
        }
    }
}