namespace ymaps.interfaces {

    interface IExpandableControlLayout extends ILayout {
        onAfterEventFiring(events:IEventManager, type:string, event?:IEvent):any;
        onBeforeEventFiring(events:IEventManager, type:string, event?:IEvent):any;
    }
}