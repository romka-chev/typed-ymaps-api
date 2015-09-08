namespace ymaps.multiRouter.driving {

    interface Segment extends interfaces.IGeoObject {
        model:multiRouter.driving.SegmentModel;
        properties:SegmentPropertiesManager;
    }

    interface SegmentPropertiesManager extends data.Manager {
        get(path:"index",             defaultValue?:number                             ):number;
        get(path:"type",              defaultValue?:string                             ):string; // todo determine?
        get(path:"street",            defaultValue?:string                             ):string;
        get(path:"action",            defaultValue?:SegmentPropertiesAction            ):SegmentPropertiesAction;
        get(path:"distance",          defaultValue?:SegmentPropertiesDistance          ):SegmentPropertiesDistance;
        get(path:"duration",          defaultValue?:SegmentPropertiesDuration          ):SegmentPropertiesDuration;
        get(path:"durationInTraffic", defaultValue?:SegmentPropertiesDurationInTraffic ):SegmentPropertiesDurationInTraffic;
        get(path:"text",              defaultValue?:string                             ):string;
        get(path:"viaPoints",         defaultValue?:number[]                           ):number[];
        get(path:"lodIndex",          defaultValue?:number                             ):number;
    }

    interface SegmentPropertiesAction {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentPropertiesDurationInTraffic {
        text :string;
        value:any; // todo determine?
    }
}