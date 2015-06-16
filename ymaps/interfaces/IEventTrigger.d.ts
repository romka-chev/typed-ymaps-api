module ymaps {
    export module interfaces {
        export interface IEventTrigger{
            fire(type:string, eventObject?:IEvent|any):IEventTrigger;
        }
    }
}