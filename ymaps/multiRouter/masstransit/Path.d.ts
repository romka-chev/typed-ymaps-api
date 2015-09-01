module ymaps {
    export module multiRouter {
        export module masstransit {
            export class Path extends interfaces.IGeoObject {
                model:multiRouter.masstransit.PathModel;

                properties:PathPropertiesManager;

                getSegmentMarkers():GeoObjectCollection;

                getSegments():GeoObjectCollection;
            }

            export class PathPropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"type", defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance", defaultValue:T):T|PathPropertiesDistance;
                get<T>(path:"duration", defaultValue:T):T|PathPropertiesDuration;
                get<T>(path:"coordinates", defaultValue:T):T|number[][];
                get<T>(path:"encodedCoordinates", defaultValue:T):T|string;

                // todo setters ?
            }

            export interface PathPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface PathPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}