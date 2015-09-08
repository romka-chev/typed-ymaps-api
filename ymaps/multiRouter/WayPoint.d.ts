namespace ymaps.multiRouter {

    interface WayPoint extends interfaces.IGeoObject {
        model:multiRouter.WayPointModel;
        properties:WayPointPropertiesManager;
    }

    interface WayPointPropertiesManager extends data.Manager {
        get(path:"index",          defaultValue?:number ):number;
        get(path:"request",        defaultValue?:string ):string;
        get(path:"address",        defaultValue?:string ):string;
        get(path:"description",    defaultValue?:string ):string;
        get(path:"name",           defaultValue?:string ):string;
        get(path:"searchMetaData", defaultValue?:any    ):any; // todo determine?
    }
}