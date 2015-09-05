namespace ymaps.interfaces {

    interface IEventController {
        onStartListening(events:IEventManager, type:string):any;
        onStopListening(events:IEventManager, type:string):any;
    }
}