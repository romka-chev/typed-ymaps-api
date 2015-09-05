namespace ymaps.interfaces {
    interface IEventTrigger {
        fire(type:string, eventObject?:IEvent|any):IEventTrigger;
    }
}