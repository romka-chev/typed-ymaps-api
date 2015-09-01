module ymaps {
    export module multiRouter {
        export module masstransit {
            export class TransportSegmentModel extends interfaces.IEventEmitter {
                geometry:geometry.base.LineString;
                path:multiRouter.masstransit.PathModel;
                properties:TransportSegmentModelPropertiesManager;

                destroy():any;
                getStops():multiRouter.masstransit.StopModel[];
                getType():string; // todo determine?
                update(segmentJson:any):any;
            }

            export class TransportSegmentModelPropertiesManager extends data.Manager {
                get<T>(path:"index",        defaultValue:T):T|number;
                get<T>(path:"type",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"text",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"transports",   defaultValue:T):T|multiRouter.masstransit.TransportProperties[];
                get<T>(path:"stops",        defaultValue:T):T|any; // todo determine GeoJson:FeatureCollection?
                get<T>(path:"distance",     defaultValue:T):T|TransportSegmentModelPropertiesDistance;
                get<T>(path:"duration",     defaultValue:T):T|TransportSegmentModelPropertiesDuration;
                get<T>(path:"lodIndex",     defaultValue:T):T|number;

                // todo setters ?
            }

            export interface TransportSegmentModelPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface TransportSegmentModelPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}