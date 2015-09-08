namespace ymaps.multiRouter.masstransit {

    interface WalkSegmentModel extends interfaces.IEventEmitter {
        geometry:geometry.base.LineString;
        path:multiRouter.masstransit.PathModel;
        properties:WalkSegmentModelPropertiesManager;

        destroy():any;
        getType():string; // todo determine?
    }

    interface WalkSegmentModelPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number                             ):number;
        get(path:"type",     defaultValue?:string                             ):string; // todo determine?
        get(path:"text",     defaultValue?:string                             ):string;
        get(path:"distance", defaultValue?:WalkSegmentModelPropertiesDistance ):WalkSegmentModelPropertiesDistance;
        get(path:"duration", defaultValue?:WalkSegmentModelPropertiesDuration ):WalkSegmentModelPropertiesDuration;
        get(path:"lodIndex", defaultValue?:number                             ):number;
    }

    interface WalkSegmentModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface WalkSegmentModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}