namespace ymaps.multiRouter {

    interface WayPointModel extends interfaces.IEventEmitter {
        geometry:geometry.base.Point;
        multiRoute:multiRouter.MultiRouteModel;
        properties:WayPointModelPropertiesManager;

        destroy():any;
        getReferencePoint():any; // todo determine?
        getReferencePointIndex():number;
        setReferencePoint(referencePoint:string|number[]|geometry.Point):any;
        update(wayPointJson:any):any;
    }

    interface WayPointModelPropertiesManager extends data.Manager {
        get(path:"index",          defaultValue?:number ):number;
        get(path:"request",        defaultValue?:string ):string;
        get(path:"address",        defaultValue?:string ):string;
        get(path:"description",    defaultValue?:string ):string;
        get(path:"name",           defaultValue?:string ):string;
        get(path:"searchMetaData", defaultValue?:any    ):any; // todo determine?
    }
}