module ymaps {
    export module multiRouter {
        class WayPoint extends interfaces.IGeoObject {

            model:multiRouter.WayPointModel;
            properties:WayPointPropertiesManager;

        }

        export class WayPointPropertiesManager extends data.Manager {
            get<T>(path:"index", defaultValue:T):T|number;
            get<T>(path:"request", defaultValue:T):T|string;
            get<T>(path:"address", defaultValue:T):T|string;
            get<T>(path:"description", defaultValue:T):T|string;
            get<T>(path:"name", defaultValue:T):T|string;
            get<T>(path:"searchMetaData", defaultValue:T):T|any; // todo determine?
        }
    }
}