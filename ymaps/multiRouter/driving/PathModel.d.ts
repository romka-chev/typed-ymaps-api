namespace ymaps.multiRouter.driving {

    interface PathModel extends interfaces.IEventEmitter {

        properties:PathModelPropertiesManager;
        route:multiRouter.driving.RouteModel;

        destroy():any;
        getSegments():multiRouter.driving.SegmentModel[];
        getType():string; // todo determine?
        update(pathJson:any):any;
    }

    interface PathModelPropertiesManager extends data.Manager {
        get(path:"index",                defaultValue?:number                                ):number;
        get(path:"type",                 defaultValue?:string                                ):string; // todo determine?
        get(path:"distance",             defaultValue?:PathModelPropertiesDistance           ):PathModelPropertiesDistance;
        get(path:"duration",             defaultValue?:PathModelPropertiesDuration           ):PathModelPropertiesDuration;
        get(path:"durationInTraffic",    defaultValue?:PathModelPropertiesDurationInTraffic  ):PathModelPropertiesDurationInTraffic;
        get(path:"coordinates",          defaultValue?:number[][]                            ):number[][];
        get(path:"encodedCoordinates",   defaultValue?:string                                ):string;
    }

    interface PathModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface PathModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
    interface PathModelPropertiesDurationInTraffic {
        text :string;
        value:any; // todo determine?
    }
}