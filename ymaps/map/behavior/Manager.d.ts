namespace ymaps.map.behavior {

    interface ManagerStatic {
        // todo determine parameters?
        new(map:Map, behaviors:string|string[], options:ManagerOptions = defaultManagerOptions):Manager;
    }
    interface Manager extends interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IParentOnMap {
        disable(behaviors:string|string[]):Manager;
        enable(behaviors:string|string[]):Manager;
        get(behaviorName:string):interfaces.IBehavior;
        isEnabled(behaviorName:string):boolean;
    }

    interface ManagerOptions {

    }

    declare var Manager:ManagerStatic;
    declare var defaultManagerOptions:ManagerOptions = {}
}