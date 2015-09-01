module ymaps {
    export module multiRouter {
        export module masstransit {
            export class StopModel extends interfaces.IEventEmitter {
                geometry:geometry.base.Point;
                properties:StopModelPropertiesManager;
                segment:multiRouter.masstransit.TransportSegmentModel;
            }

            export class StopModelPropertiesManager extends data.Manager {
                get<T>(path:"index", defaultValue:T):T|number;
                get<T>(path:"id", defaultValue:T):T|string;
                get<T>(path:"name", defaultValue:T):T|string;
                get<T>(path:"lodIndex", defaultValue:T):T|number;

                // todo setters ?
            }
        }
    }
}