module ymaps {
    export module multiRouter {
        export module driving {
            export class Segment extends interfaces.IGeoObject {
                model:multiRouter.driving.SegmentModel;
                properties:SegmentPropertiesManager;
            }

            export class SegmentPropertiesManager extends data.Manager {
                get<T>(path:"index",              defaultValue:T):T|number;
                get<T>(path:"type",               defaultValue:T):T|string; // todo determine?
                get<T>(path:"street",             defaultValue:T):T|string;
                get<T>(path:"action",             defaultValue:T):T|SegmentPropertiesAction;
                get<T>(path:"distance",           defaultValue:T):T|SegmentPropertiesDistance;
                get<T>(path:"duration",           defaultValue:T):T|SegmentPropertiesDuration;
                get<T>(path:"durationInTraffic",  defaultValue:T):T|SegmentPropertiesDurationInTraffic;
                get<T>(path:"text",               defaultValue:T):T|string;
                get<T>(path:"viaPoints",          defaultValue:T):T|number[];
                get<T>(path:"lodIndex",           defaultValue:T):T|number;

                // todo setters ?
            }

            export interface SegmentPropertiesAction{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentPropertiesDistance{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentPropertiesDuration{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentPropertiesDurationInTraffic{
                text :string;
                value:any; // todo determine?
            }
        }
    }
}