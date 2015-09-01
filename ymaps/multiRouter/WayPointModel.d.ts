module ymaps {
    export module multiRouter {
        class WayPointModel extends interfaces.IEventEmitter {

            geometry:geometry.base.Point;
            multiRoute:multiRouter.MultiRouteModel;
            properties:WayPointModelPropertiesManager;

            destroy():any;
            getReferencePoint():any; // todo determine?
            getReferencePointIndex():number;

            setReferencePoint(referencePoint:string):any;
            setReferencePoint(referencePoint:number[]):any;
            setReferencePoint(referencePoint:geometry.Point):any;

            update(wayPointJson:any):any;

        }

        export class WayPointModelPropertiesManager extends data.Manager {
            get<T>(path:"index", defaultValue:T):T|number;
            get<T>(path:"request", defaultValue:T):T|string;
            get<T>(path:"address", defaultValue:T):T|string;
            get<T>(path:"description", defaultValue:T):T|string;
            get<T>(path:"name", defaultValue:T):T|string;
            get<T>(path:"searchMetaData", defaultValue:T):T|any; // todo determine?

            // todo setters ?
        }
    }
}