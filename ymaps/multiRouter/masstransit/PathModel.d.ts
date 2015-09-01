module ymaps {
    export module multiRouter {
        export module masstransit {
            export class PathModel extends interfaces.IEventEmitter {

                properties:PathModelPropertiesManager;
                route:multiRouter.masstransit.RouteModel;

                destroy():any;
                getSegments():multiRouter.masstransit.SegmentModel[]; // todo report about interface/class missed. Maybe TransferSegmentModel?
                getType():string; // todo determine?
                update(pathJson:any):any;
            }

            export class PathModelPropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"type", defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance", defaultValue:T):T|PathModelPropertiesDistance;
                get<T>(path:"duration", defaultValue:T):T|PathModelPropertiesDuration;
                get<T>(path:"coordinates", defaultValue:T):T|number[][];
                get<T>(path:"encodedCoordinates", defaultValue:T):T|string;

                // todo setters ?
            }

            export interface PathModelPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface PathModelPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}