namespace ymaps.multiRouter.masstransit {

    interface WalkSegment extends interfaces.IGeoObject {
        model:multiRouter.masstransit.WalkSegmentModel;
        properties:WalkSegmentPropertiesManager;
    }

    interface WalkSegmentPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number                        ):number;
        get(path:"type",     defaultValue?:string                        ):string; // todo determine?
        get(path:"text",     defaultValue?:string                        ):string;
        get(path:"distance", defaultValue?:WalkSegmentPropertiesDistance ):WalkSegmentPropertiesDistance;
        get(path:"duration", defaultValue?:WalkSegmentPropertiesDuration ):WalkSegmentPropertiesDuration;
        get(path:"lodIndex", defaultValue?:number                        ):number;
    }

    interface WalkSegmentPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface WalkSegmentPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}