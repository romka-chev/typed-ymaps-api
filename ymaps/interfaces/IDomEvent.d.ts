namespace ymaps.interfaces {

    interface IDomEventStatic{
        new(originalEvent:any):IDomEvent;
    }
    interface IDomEvent extends IEvent {
        get(name:string):any;
        getSourceEvent():IDomEvent;
        preventDefault():any;
        stopImmediatePropagation():any;
        stopPropagation():any;
    }
}