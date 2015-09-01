module ymaps {
    export module multiRouter {
        class MultiRouteModel extends interfaces.IEventEmitter {

            properties:data.Manager; // todo determine

            constructor(referencePoints:interfaces.IMultiRouteReferencePoint[], params?:interfaces.IMultiRouteParams);

            destroy():any;
            getAllPoints():multiRouter.WayPointModel[]|multiRouter.ViaPointModel[];
            getJson():any;
            getParams():interfaces.IMultiRouteParams;

            /**
             * @deprecated
             */
            getPoints():multiRouter.WayPointModel[]|multiRouter.ViaPointModel[];
            getReferencePointIndexes():ReferencePointIndexes;
            getReferencePoints():interfaces.IMultiRouteReferencePoint[];
            getRoutes():multiRouter.driving.RouteModel[]|multiRouter.masstransit.RouteModel[]; // todo report for link fix
            getViaPoints():multiRouter.ViaPointModel[];
            getWayPoints():multiRouter.WayPointModel[];

            // todo report about closing bracket missed in docs;
            // todo determine clearRequests type. Report about type missing
            // todo is clearRequests really required? check carefully.
            setParams(params:interfaces.IMultiRouteParams, extend:boolean = false, clearRequests?:any):any;

            // todo report about closing bracket missed in docs;
            // todo determine clearRequests type. Report about type missing
            // todo is clearRequests really required? check carefully.
            setReferencePoints(referencePoints:interfaces.IMultiRouteReferencePoint[], viaIndexes?:number[], clearRequests?:any):any;
        }

        export interface ReferencePointIndexes {
            way:number[];
            via:number[];
        }
    }
}