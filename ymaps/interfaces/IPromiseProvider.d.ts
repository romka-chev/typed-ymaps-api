module ymaps {
    export module interfaces {
        export class IPromiseProvider {
            then(onResolve:Function, onReject:Function):IPromiseProvider;
        }
    }
}