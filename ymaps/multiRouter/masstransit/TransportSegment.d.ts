module ymaps {
    export module multiRouter {
        export module masstransit {
            export class TransportSegment extends interfaces.IGeoObject {
                model:multiRouter.masstransit.TransportSegmentModel;
                properties:TransportSegmentPropertiesManager;
            }

            export class TransportSegmentPropertiesManager extends data.Manager {
                get<T>(path:"index",        defaultValue:T):T|number;
                get<T>(path:"type",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"text",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"transports",   defaultValue:T):T|multiRouter.masstransit.TransportProperties[];
                get<T>(path:"stops",        defaultValue:T):T|any; // todo determine GeoJson:FeatureCollection?
                get<T>(path:"distance",     defaultValue:T):T|TransportSegmentPropertiesDistance;
                get<T>(path:"duration",     defaultValue:T):T|TransportSegmentPropertiesDuration;
                get<T>(path:"lodIndex",     defaultValue:T):T|number;

                // todo setters ?
            }

            export interface TransportSegmentPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface TransportSegmentPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}