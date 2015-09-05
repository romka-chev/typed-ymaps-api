namespace ymaps.interfaces {

    interface IEventWorkflowController extends IEventController {
        onAfterEventFiring(events:IEventManager, type:string, event?:IEvent):any;
        onBeforeEventFiring(events:IEventManager, type:string, event?:IEvent):any;
    }
}