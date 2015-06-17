module ymaps {
    export module interfaces {
        declare class IEventWorkflowController extends IEventController{
            onAfterEventFiring (events:IEventManager, type:string, event?:IEvent):void;
            onBeforeEventFiring(events:IEventManager, type:string, event?:IEvent):void;
        }
    }
}