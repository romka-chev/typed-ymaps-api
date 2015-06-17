module ymaps {
    export module interfaces {
        export class IExpandableControlLayout extends ILayout {
            onAfterEventFiring(events:IEventManager, type:string, event?:IEvent):void;

            onBeforeEventFiring(events:IEventManager, type:string, event?:IEvent):void;
        }
    }
}