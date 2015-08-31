module ymaps {
    export module multiRouter {
        export module driving {
            class Path extends interfaces.IGeoObject {
                model:multiRouter.driving.PathModel;

                properties:PathPropertiesManager;

                getSegments():GeoObjectCollection;
            }

            export class PathPropertiesManager extends data.Manager {
                get<T>(path:"index",              defaultValue:T):T|number;
                get<T>(path:"type",               defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance",           defaultValue:T):T|PathPropertiesDistance;
                get<T>(path:"duration",           defaultValue:T):T|PathPropertiesDuration;
                get<T>(path:"durationInTraffic",  defaultValue:T):T|PathPropertiesDurationInTraffic;
                get<T>(path:"coordinates",        defaultValue:T):T|number[][];
                get<T>(path:"encodedCoordinates", defaultValue:T):T|string;

                // todo setters ?
            }

            export interface PathPropertiesDistance{
                text :string;
                value:any; // todo determine?
            }
            export interface PathPropertiesDuration{
                text :string;
                value:any; // todo determine?
            }
            export interface PathPropertiesDurationInTraffic{
                text :string;
                value:any; // todo determine?
            }
        }
    }
}