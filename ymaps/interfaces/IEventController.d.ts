module ymaps {
    export module interfaces {
        export class IEventController {
            onStartListening(events:IEventManager, type:string):void;

            onStopListening(events:IEventManager, type:string):void;
        }
    }
}