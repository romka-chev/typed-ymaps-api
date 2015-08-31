module ymaps {
    export module multiRouter {
        export module driving {
            class RouteModel extends interfaces.IEventEmitter {
                multiRoute:multiRouter.MultiRouteModel;
                properties:RouteModelPropertiesManager;

                destroy():any;
                getPaths():multiRouter.driving.PathModel[];
                getType():string; // todo determine?
                update(routeJson:any):any;
            }

            export class RouteModelPropertiesManager extends data.Manager {
                get<T>(path:"index",              defaultValue:T):T|number;
                get<T>(path:"type",               defaultValue:T):T|string; // todo determine?
                get<T>(path:"blocked",            defaultValue:T):T|boolean;
                get<T>(path:"distance",           defaultValue:T):T|RouteModelPropertiesDistance;
                get<T>(path:"duration",           defaultValue:T):T|RouteModelPropertiesDuration;
                get<T>(path:"durationInTraffic",  defaultValue:T):T|RouteModelPropertiesDurationInTraffic;
                get<T>(path:"boundedBy",          defaultValue:T):T|number[][];

                // todo setters ?
            }

            export interface RouteModelPropertiesDistance{
                text :string;
                value:any; // todo determine?
            }
            export interface RouteModelPropertiesDuration{
                text :string;
                value:any; // todo determine?
            }
            export interface RouteModelPropertiesDurationInTraffic{
                text :string;
                value:any; // todo determine?
            }
        }
    }
}