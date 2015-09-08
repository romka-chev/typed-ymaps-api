namespace ymaps.multiRouter {

    interface ViaPointModel extends interfaces.IEventEmitter {
        geometry:geometry.base.Point;
        multiRoute:multiRouter.MultiRouteModel;
        properties:ViaPointModelPropertiesManager;

        destroy():any;
        getReferencePoint():any; // todo determine?
        getReferencePointIndex():number;
        setReferencePoint(referencePoint:string|number[]|geometry.Point):any;
        update(viaPointJson:any):any;
    }

    interface ViaPointModelPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number):number;
        get(path:"lodIndex", defaultValue?:number):number;
    }
}