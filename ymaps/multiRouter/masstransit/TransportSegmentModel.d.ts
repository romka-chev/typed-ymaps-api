namespace ymaps.multiRouter.masstransit {

    interface TransportSegmentModel extends interfaces.IEventEmitter {
        geometry:geometry.base.LineString;
        path:multiRouter.masstransit.PathModel;
        properties:TransportSegmentModelPropertiesManager;

        destroy():any;
        getStops():multiRouter.masstransit.StopModel[];
        getType():string; // todo determine?
        update(segmentJson:any):any;
    }

    interface TransportSegmentModelPropertiesManager extends data.Manager {
        get(path:"index",      defaultValue?:number                                  ):number;
        get(path:"type",       defaultValue?:string                                  ):string; // todo determine?
        get(path:"text",       defaultValue?:string                                  ):string; // todo determine?
        get(path:"transports", defaultValue?:TransportProperties[]                   ):TransportProperties[];
        get(path:"stops",      defaultValue?:any                                     ):any; // todo determine GeoJson:FeatureCollection?
        get(path:"distance",   defaultValue?:TransportSegmentModelPropertiesDistance ):TransportSegmentModelPropertiesDistance;
        get(path:"duration",   defaultValue?:TransportSegmentModelPropertiesDuration ):TransportSegmentModelPropertiesDuration;
        get(path:"lodIndex",   defaultValue?:number                                  ):number;
    }

    interface TransportSegmentModelPropertiesDistance {
        text :string;
        value:any; // todo determine?
    }
    interface TransportSegmentModelPropertiesDuration {
        text :string;
        value:any; // todo determine?
    }
}