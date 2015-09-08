namespace ymaps.multiRouter {

    interface ViaPoint extends interfaces.IGeoObject {
        model:multiRouter.ViaPointModel;
        properties:ViaPointPropertiesManager;
    }

    interface ViaPointPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number):number;
        get(path:"lodIndex", defaultValue?:number):number;
    }
}