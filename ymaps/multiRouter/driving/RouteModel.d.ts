namespace ymaps.multiRouter.driving {

    interface RouteModel extends interfaces.IEventEmitter {
        multiRoute:multiRouter.MultiRouteModel;
        properties:RouteModelPropertiesManager;

        destroy():any;
        getPaths():multiRouter.driving.PathModel[];
        getType():string; // todo determine?
        update(routeJson:any):any;
    }

    interface RouteModelPropertiesManager extends data.Manager {
        get(path:"index",             defaultValue?:number                               ):number;
        get(path:"type",              defaultValue?:string                               ):string; // todo determine?
        get(path:"blocked",           defaultValue?:boolean                              ):boolean;
        get(path:"distance",          defaultValue?:RouteModelPropertiesDistance         ):RouteModelPropertiesDistance;
        get(path:"duration",          defaultValue?:RouteModelPropertiesDuration         ):RouteModelPropertiesDuration;
        get(path:"durationInTraffic", defaultValue?:RouteModelPropertiesDurationInTraffic):RouteModelPropertiesDurationInTraffic;
        get(path:"boundedBy",         defaultValue?:number[][]                           ):number[][];
    }

    interface RouteModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface RouteModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
    interface RouteModelPropertiesDurationInTraffic {
        text :string;
        value:any; // todo determine?
    }
}