namespace ymaps.map.action {

    interface ManagerStatic {
        new(map:Map):Manager;
    }
    interface Manager extends interfaces.IEventEmitter {
        breakTick():any;
        execute(action:interfaces.IMapAction):any;
        getCurrentState():ManagerCurrentState;
        getMap():Map;
        setCorrection(userFunction:Function):any; // todo (tick) => tick ?
        stop():any;
    }

    interface ManagerCurrentState {
        isTicking        ?:boolean;
        tickProgress     ?:number; // todo check
        zoom             ?:number;
        globalPixelCenter?:number[];
    }

    declare var Manager:ManagerStatic;
}