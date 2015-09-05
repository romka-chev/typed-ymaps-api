namespace ymaps.event {

    interface ManagerStatic {
        new(parameters?:ManagerParameters):Manager;
    }
    interface Manager extends interfaces.IEventManager {
        createEventObject(type:string, event:any, target:any):Event;
        once(types:string|string[], callback:(event?:Event) => any, context?:any, priority:number = 0):interfaces.IEventManager;
    }

    interface ManagerParameters {
        context    ?:any;
        controllers?:interfaces.IEventWorkflowController[];
        parent     ?:interfaces.IEventManager;
    }

    declare var Manager:ManagerStatic;
}