module ymaps {
    export module interfaces {
        export class IDomEvent extends IEvent {
            constructor(originalEvent:any);
            get(name:string):any;
            getSourceEvent():IDomEvent;
            preventDefault():void;
            stopImmediatePropagation():void;
            stopPropagation():void;
        }
    }
}