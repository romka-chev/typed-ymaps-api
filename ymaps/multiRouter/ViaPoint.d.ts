module ymaps {
    export module multiRouter {
        class ViaPoint extends interfaces.IGeoObject {

            model:multiRouter.ViaPointModel;
            properties:ViaPointPropertiesManager;

        }

        export class ViaPointPropertiesManager extends data.Manager {
            get<T>(path:"index", defaultValue:T):T|number;
            get<T>(path:"lodIndex", defaultValue:T):T|number;

            // todo setters ?
        }
    }
}