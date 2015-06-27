module ymaps {
    export module map {
        export module action {
            export class Manager extends interfaces.IEventEmitter {
                constructor(map:Map);

                breakTick():void;
                execute(action:interfaces.IMapAction):void;
                getCurrentState():ManagerCurrentState;
                getMap():Map;
                setCorrection(userFunction:Function):void; // todo (tick) => tick ?
                stop():void;
            }

            export class ManagerCurrentState{
                isTicking:boolean;
                tickProgress:number; // todo check
                zoom:number;
                globalPixelCenter:number[];
            }
        }
    }
}