namespace ymaps.multiRouter.masstransit {

    interface TransportSegment extends interfaces.IGeoObject {
        model:multiRouter.masstransit.TransportSegmentModel;
        properties:TransportSegmentPropertiesManager;
    }

    interface TransportSegmentPropertiesManager extends data.Manager {
        get(path:"index",      defaultValue?:number                             ):number;
        get(path:"type",       defaultValue?:string                             ):string; // todo determine?
        get(path:"text",       defaultValue?:string                             ):string; // todo determine?
        get(path:"transports", defaultValue?:TransportProperties[]              ):TransportProperties[];
        get(path:"stops",      defaultValue?:any                                ):any; // todo determine GeoJson:FeatureCollection?
        get(path:"distance",   defaultValue?:TransportSegmentPropertiesDistance ):TransportSegmentPropertiesDistance;
        get(path:"duration",   defaultValue?:TransportSegmentPropertiesDuration ):TransportSegmentPropertiesDuration;
        get(path:"lodIndex",   defaultValue?:number                             ):number;
    }

    interface TransportSegmentPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface TransportSegmentPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}