module ymaps {
    export class Event extends interfaces.IEvent {
        constructor(originalEvent:any, sourceEvent?:interfaces.IEvent);

        callMethod(name:string):any;

        get(name:string):any;

        isDefaultPrevented():boolean;

        isImmediatePropagationStopped():boolean;

        isPropagationStopped():boolean;

        preventDefault():void;

        stopImmediatePropagation():void;

        stopPropagation():void;
    }
}