module ymaps {
    export module multiRouter {
        export module masstransit {
            export class WalkSegmentModel extends interfaces.IEventEmitter {
                geometry:geometry.base.LineString;
                path:multiRouter.masstransit.PathModel;
                properties:WalkSegmentModelPropertiesManager;

                destroy():any;
                getType():string; // todo determine?
            }

            export class WalkSegmentModelPropertiesManager extends data.Manager {
                get<T>(path:"index",        defaultValue:T):T|number;
                get<T>(path:"type",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"text",         defaultValue:T):T|string; // todo determine?
                get<T>(path:"distance",     defaultValue:T):T|WalkSegmentModelPropertiesDistance;
                get<T>(path:"duration",     defaultValue:T):T|WalkSegmentModelPropertiesDuration;
                get<T>(path:"lodIndex",     defaultValue:T):T|number;

                // todo setters ?
            }

            export interface WalkSegmentModelPropertiesDistance {
                text :string;
                value:any; // todo determine?
            }
            export interface WalkSegmentModelPropertiesDuration {
                text :string;
                value:any; // todo determine?
            }
        }
    }
}