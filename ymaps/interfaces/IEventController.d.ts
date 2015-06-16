module ymaps {
    export module interfaces {
        export interface IEventController {
            onStartListening(events:IEventManager, type:string):void;
            onStopListening (events:IEventManager, type:string):void;
        }
    }
}