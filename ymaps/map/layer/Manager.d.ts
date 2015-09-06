namespace ymaps.map.layer {

    interface ManagerStatic {
        new(map:Map, options:ManagerOptions = defaultManagerOptions):Manager;
    }
    interface Manager extends interfaces.ILayer, interfaces.IMapObjectCollection {
        // todo determine callback?
        each(callback:Function, context?:any):any;
    }

    interface ManagerOptions {
        trafficImageZIndex?:number;
        trafficInfoZIndex ?:number;
        trafficJamZIndex  ?:number;
    }

    declare var Manager:ManagerStatic;
    declare var defaultManagerOptions:ManagerOptions = {
        trafficImageZIndex: 201,
        trafficInfoZIndex : 1,
        trafficJamZIndex  : 0,
    }
}