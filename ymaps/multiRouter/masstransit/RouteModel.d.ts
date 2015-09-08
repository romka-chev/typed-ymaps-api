namespace ymaps.multiRouter.masstransit {

    interface RouteModel extends interfaces.IEventEmitter {
        multiRoute:multiRouter.MultiRouteModel;
        properties:RouteModelPropertiesManager;

        getPaths():multiRouter.masstransit.PathModel[];
        getType():string; // todo determine?
        update(routeJson:any):any;
    }

    interface RouteModelPropertiesManager extends data.Manager {
        get(path:"index",     defaultValue?:number                       ):number;
        get(path:"type",      defaultValue?:string                       ):string; // todo determine?
        get(path:"distance",  defaultValue?:RouteModelPropertiesDistance ):RouteModelPropertiesDistance;
        get(path:"duration",  defaultValue?:RouteModelPropertiesDuration ):RouteModelPropertiesDuration;
        get(path:"boundedBy", defaultValue?:number[][]                   ):number[][];
    }

    interface RouteModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface RouteModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}