namespace ymaps.interfaces {

    interface IPromiseProvider {
        then(onResolve:Function, onReject:Function):IPromiseProvider;
    }
}