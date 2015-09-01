module ymaps {
    export module multiRouter {
        export module masstransit {
            export class TransferSegment extends interfaces.IGeoObject {
                model:multiRouter.masstransit.TransferSegmentModel;
                properties:TransferSegmentPropertiesManager;
            }

            export class TransferSegmentPropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"type", defaultValue:T):T|string; // todo determine?
                get<T>(path:"text", defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance", defaultValue:T):T|TransferSegmentPropertiesDistance;
                get<T>(path:"duration", defaultValue:T):T|TransferSegmentPropertiesDuration;
                get<T>(path:"lodIndex", defaultValue:T):T|number;

                // todo setters ?
            }

            export interface TransferSegmentPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface TransferSegmentPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}