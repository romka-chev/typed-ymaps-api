module ymaps {
    export module vow {
        export class Promise {
            constructor(resolved?:Function);

            done(onFulfilled?:Function, onRejected?:Function, onProgress?:Function, ctx?:any):void;

            spread(onFulfilled?:Function, onRejected?:Function, ctx?:any):Promise;

            then(onFulfilled?:Function, onRejected?:Function, onProgress?:Function, ctx?:any):Promise;

            valueOf():any;
        }
    }
}