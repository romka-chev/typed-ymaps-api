namespace ymaps.multiRouter.masstransit {

    interface TransferSegmentModel extends interfaces.IGeoObject {
        geometry:geometry.base.LineString; // todo report about incompatible override
        path:multiRouter.masstransit.PathModel;
        properties:TransferSegmentModelPropertiesManager;

        destroy(segmentJson:any):any;
        getType():string;
    }

    interface TransferSegmentModelPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number                                 ):number;
        get(path:"type",     defaultValue?:string                                 ):string; // todo determine?
        get(path:"text",     defaultValue?:string                                 ):string;
        get(path:"distance", defaultValue?:TransferSegmentModelPropertiesDistance ):TransferSegmentModelPropertiesDistance;
        get(path:"duration", defaultValue?:TransferSegmentModelPropertiesDuration ):TransferSegmentModelPropertiesDuration;
        get(path:"lodIndex", defaultValue?:number                                 ):number;
    }

    interface TransferSegmentModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface TransferSegmentModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}