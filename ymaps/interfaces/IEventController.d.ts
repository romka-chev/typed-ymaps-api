module ymaps {
    export module interfaces {
        declare class IEventController {
            onStartListening(events:IEventManager, type:string):void;
            onStopListening (events:IEventManager, type:string):void;
        }
    }
}