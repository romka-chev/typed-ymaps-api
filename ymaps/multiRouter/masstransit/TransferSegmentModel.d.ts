module ymaps {
    export module multiRouter {
        export module masstransit {
            export class TransferSegmentModel extends interfaces.IGeoObject {
                geometry:geometry.base.LineString;
                path:multiRouter.masstransit.PathModel;
                properties:TransferSegmentModelPropertiesManager;

                destroy(segmentJson:any):any;
                getType():string;
            }

            export class TransferSegmentModelPropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"type", defaultValue:T):T|string; // todo determine?
                get<T>(path:"text", defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance", defaultValue:T):T|TransferSegmentModelPropertiesDistance;
                get<T>(path:"duration", defaultValue:T):T|TransferSegmentModelPropertiesDuration;
                get<T>(path:"lodIndex", defaultValue:T):T|number;

                // todo setters ?
            }

            export interface TransferSegmentModelPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface TransferSegmentModelPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}