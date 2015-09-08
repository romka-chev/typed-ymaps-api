namespace ymaps.multiRouter.masstransit {

    interface PathModel extends interfaces.IEventEmitter {

        properties:PathModelPropertiesManager;
        route:multiRouter.masstransit.RouteModel;

        destroy():any;
        getSegments():SegmentModel[]; // todo report about interface/class missed. Maybe TransferSegmentModel?
        getType():string; // todo determine?
        update(pathJson:any):any;
    }

    interface PathModelPropertiesManager extends data.Manager {
        get(path:"index",              defaultValue?:number                      ):number;
        get(path:"type",               defaultValue?:string                      ):string; // todo determine?
        get(path:"distance",           defaultValue?:PathModelPropertiesDistance ):PathModelPropertiesDistance;
        get(path:"duration",           defaultValue?:PathModelPropertiesDuration ):PathModelPropertiesDuration;
        get(path:"coordinates",        defaultValue?:number[][]                  ):number[][];
        get(path:"encodedCoordinates", defaultValue?:string                      ):string;
    }

    interface PathModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface PathModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}