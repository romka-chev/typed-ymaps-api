namespace ymaps.interfaces {

    interface IEvent {
        allowMapEvent():any;
        callMethod(name:string):any;
        get(name:string):any;
        getSourceEvent():IEvent;
        isDefaultPrevented():boolean;
        isImmediatePropagationStopped():boolean;
        isMapEventAllowed():boolean;
        isPropagationStopped():boolean;
        preventDefault():any;
        stopImmediatePropagation():any;
        stopPropagation():any;
    }
}