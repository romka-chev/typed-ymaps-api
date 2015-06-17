module ymaps {
    export module interfaces {
        declare class IEvent {
            allowMapEvent():void;
            callMethod(name:string):void;
            get(name:string):any;
            getSourceEvent():IEvent|undefined; //todo null?
            isDefaultPrevented():boolean;
            isImmediatePropagationStopped():boolean;
            isMapEventAllowed():boolean;
            isPropagationStopped():boolean;
            preventDefault():void;
            stopImmediatePropagation():void;
            stopPropagation():void;

        }
    }
}