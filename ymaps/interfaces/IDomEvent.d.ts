module ymaps {
    export module interfaces {
        export interface IDomEvent extends IEvent {
            new(originalEvent:any):IDomEvent;
            get(name:string):any;
            getSourceEvent():IDomEvent;
            preventDefault():void;
            stopImmediatePropagation():void;
            stopPropagation():void;
        }
    }
}