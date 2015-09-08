namespace ymaps.multiRouter.masstransit {

    interface Route extends interfaces.IGeoObject {
        model:multiRouter.masstransit.RouteModel;
        properties:RoutePropertiesManager;

        getPaths():GeoObjectCollection;
    }

    interface RoutePropertiesManager extends data.Manager {
        get(path:"index",     defaultValue?:number                  ):number;
        get(path:"type",      defaultValue?:string                  ):string; // todo determine?
        get(path:"distance",  defaultValue?:RoutePropertiesDistance ):RoutePropertiesDistance;
        get(path:"duration",  defaultValue?:RoutePropertiesDuration ):RoutePropertiesDuration;
        get(path:"boundedBy", defaultValue?:number[][]              ):number[][];
    }

    interface RoutePropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface RoutePropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}