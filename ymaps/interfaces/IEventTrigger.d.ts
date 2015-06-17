module ymaps {
    export module interfaces {
        declare class IEventTrigger{
            fire(type:string, eventObject?:IEvent|any):IEventTrigger;
        }
    }
}