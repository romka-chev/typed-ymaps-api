module ymaps {
    export module multiRouter {
        export module masstransit {
            export class WalkSegment extends interfaces.IGeoObject {
                model:multiRouter.masstransit.WalkSegmentModel;
                properties:WalkSegmentPropertiesManager;
            }

            export class WalkSegmentPropertiesManager extends data.Manager {
                get<T>(path:"index",        defaultValue:T):T|number;
                get<T>(path:"type",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"text",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance",     defaultValue:T):T|WalkSegmentPropertiesDistance;
                get<T>(path:"duration",     defaultValue:T):T|WalkSegmentPropertiesDuration;
                get<T>(path:"lodIndex",     defaultValue:T):T|number;

                // todo setters ?
            }

            export interface WalkSegmentPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface WalkSegmentPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}