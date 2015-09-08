namespace ymaps.multiRouter.driving {

    interface SegmentModel extends interfaces.IGeoObject {
        geometry:geometry.base.LineString; // todo report about incompatible override
        path:multiRouter.driving.PathModel;
        properties:SegmentModelPropertiesManager;

        destroy():any;
        getType():string; // todo determine?
        getViaPoints():multiRouter.ViaPointModel[];
        update(segmentJson:any):any;
    }

    interface SegmentModelPropertiesManager extends data.Manager {
        get(path:"index",             defaultValue?:number                                  ):number;
        get(path:"type",              defaultValue?:string                                  ):string; // todo determine?
        get(path:"street",            defaultValue?:string                                  ):string;
        get(path:"action",            defaultValue?:SegmentModelPropertiesAction            ):SegmentModelPropertiesAction;
        get(path:"distance",          defaultValue?:SegmentModelPropertiesDistance          ):SegmentModelPropertiesDistance;
        get(path:"duration",          defaultValue?:SegmentModelPropertiesDuration          ):SegmentModelPropertiesDuration;
        get(path:"durationInTraffic", defaultValue?:SegmentModelPropertiesDurationInTraffic ):SegmentModelPropertiesDurationInTraffic;
        get(path:"text",              defaultValue?:string                                  ):string;
        get(path:"viaPoints",         defaultValue?:number[]                                ):number[];
        get(path:"lodIndex",          defaultValue?:number                                  ):number;
    }

    interface SegmentModelPropertiesAction {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
    interface SegmentModelPropertiesDurationInTraffic {
        text :string;
        value:any; // todo determine?
    }
}