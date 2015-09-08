namespace ymaps.multiRouter.masstransit {

    interface TransferSegment extends interfaces.IGeoObject {
        model:multiRouter.masstransit.TransferSegmentModel;
        properties:TransferSegmentPropertiesManager;
    }

    interface TransferSegmentPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number                            ):number;
        get(path:"type",     defaultValue?:string                            ):string; // todo determine?
        get(path:"text",     defaultValue?:string                            ):string;
        get(path:"distance", defaultValue?:TransferSegmentPropertiesDistance ):TransferSegmentPropertiesDistance;
        get(path:"duration", defaultValue?:TransferSegmentPropertiesDuration ):TransferSegmentPropertiesDuration;
        get(path:"lodIndex", defaultValue?:number                            ):number;
    }

    interface TransferSegmentPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface TransferSegmentPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}