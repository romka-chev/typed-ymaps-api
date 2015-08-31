module ymaps {
    export module multiRouter {
        export module driving {
            class SegmentModel extends interfaces.IGeoObject {
                geometry:geometry.base.LineString;
                path:multiRouter.driving.PathModel;
                properties:SegmentModelPropertiesManager;

                destroy():any;
                getType():string; // todo determine?
                getViaPoints():multiRouter.ViaPointModel[];
                update(segmentJson:any):any;
            }

            export class SegmentModelPropertiesManager extends data.Manager {
                get<T>(path:"index",              defaultValue:T):T|number;
                get<T>(path:"type",               defaultValue:T):T|string; // todo determine?
                get<T>(path:"street",             defaultValue:T):T|string;
                get<T>(path:"action",             defaultValue:T):T|SegmentModelPropertiesAction;
                get<T>(path:"distance",           defaultValue:T):T|SegmentModelPropertiesDistance;
                get<T>(path:"duration",           defaultValue:T):T|SegmentModelPropertiesDuration;
                get<T>(path:"durationInTraffic",  defaultValue:T):T|SegmentModelPropertiesDurationInTraffic;
                get<T>(path:"text",               defaultValue:T):T|string;
                get<T>(path:"viaPoints",          defaultValue:T):T|number[];
                get<T>(path:"lodIndex",           defaultValue:T):T|number;

                // todo setters ?
            }

            export interface SegmentModelPropertiesAction{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentModelPropertiesDistance{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentModelPropertiesDuration{
                text :string;
                value:any; // todo determine?
            }
            export interface SegmentModelPropertiesDurationInTraffic{
                text :string;
                value:any; // todo determine?
            }
        }
    }
}