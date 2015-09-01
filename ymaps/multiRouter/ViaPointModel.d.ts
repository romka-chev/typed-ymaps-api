module ymaps {
    export module multiRouter {
        class ViaPointModel extends interfaces.IEventEmitter {

            geometry:geometry.base.Point;
            multiRoute:multiRouter.MultiRouteModel;
            properties:ViaPointModelPropertiesManager;

            destroy():any;
            getReferencePoint():any; // todo determine?
            getReferencePointIndex():number;

            setReferencePoint(referencePoint:string):any;
            setReferencePoint(referencePoint:number[]):any;
            setReferencePoint(referencePoint:geometry.Point):any;

            update(viaPointJson:any):any;

        }

        export class ViaPointModelPropertiesManager extends data.Manager {
            get<T>(path:"index", defaultValue:T):T|number;
            get<T>(path:"lodIndex", defaultValue:T):T|number;

            // todo setters ?
        }
    }
}