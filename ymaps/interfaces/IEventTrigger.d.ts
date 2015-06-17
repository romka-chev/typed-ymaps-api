module ymaps {
    export module interfaces {
        export class IEventTrigger{
            fire(type:string, eventObject?:IEvent|any):IEventTrigger;
        }
    }
}