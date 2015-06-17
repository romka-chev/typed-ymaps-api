module ymaps {
    export module interfaces {
        declare class IDomEvent extends IEvent {
            constructor(originalEvent:any);
            get(name:string):any;
            getSourceEvent():IDomEvent;
            preventDefault():void;
            stopImmediatePropagation():void;
            stopPropagation():void;
        }
    }
}