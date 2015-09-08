namespace ymaps.multiRouter {

    interface MultiRouteModelStatic{
        new(referencePoints:interfaces.IMultiRouteReferencePoint[], params:interfaces.IMultiRouteParams = defaultMultiRouteModelStaticParameters):MultiRouteModel;
    }
    interface MultiRouteModel extends interfaces.IEventEmitter {

        properties:data.Manager;

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

    interface ReferencePointIndexes {
        way:number[];
        via:number[];
    }

    declare var MultiRouteModel:MultiRouteModelStatic;
    declare var defaultMultiRouteModelStaticParameters:interfaces.IMultiRouteParams = {
        avoidTrafficJams: false,
        boundedBy       : null,
        results         : 3,
        routingMode     : "auto",
        strictBounds    : false,
        viaIndexes      : []
    }
}