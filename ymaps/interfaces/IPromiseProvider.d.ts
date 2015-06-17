module ymaps {
    export module interfaces {
        declare class IPromiseProvider {
            then(onResolve:Function, onReject:Function):IPromiseProvider;
        }
    }
}