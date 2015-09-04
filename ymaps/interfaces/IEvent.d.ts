module ymaps {
    export module interfaces {
        export class IEvent {
            allowMapEvent():void;

            callMethod(name:string):void;

            get(name:string):any;

            getSourceEvent():IEvent;
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