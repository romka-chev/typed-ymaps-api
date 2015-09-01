module ymaps {
    export module multiRouter {
        export module masstransit {
            export class Route extends interfaces.IGeoObject {
                model:multiRouter.masstransit.RouteModel;

                properties:RoutePropertiesManager;

                getPaths():GeoObjectCollection;
            }

            export class RoutePropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"type", defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance", defaultValue:T):T|RoutePropertiesDistance;
                get<T>(path:"duration", defaultValue:T):T|RoutePropertiesDuration;
                get<T>(path:"boundedBy", defaultValue:T):T|number[][];

                // todo setters ?
            }

            export interface RoutePropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface RoutePropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}