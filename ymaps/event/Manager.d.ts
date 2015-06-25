module ymaps {
    export module event {
        export class Manager extends interfaces.IEventManager {
            constructor(parameters?:ManagerParameters);

            createEventObject(type:string, event:any, target:any):Event;

            fire(type:string, event?:Event|any):Manager;

            once(types:string|string[], callback:(event?:Event) => any, context?:any, priority:number = 0):interfaces.IEventManager;

            setParent(parent:interfaces.IEventManager|undefined):Manager; // todo null?
        }

        export class ManagerParameters {
            context:any;
            controllers:interfaces.IEventWorkflowController[];
            parent:interfaces.IEventManager;
        }

    }
}