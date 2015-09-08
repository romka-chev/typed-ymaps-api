namespace ymaps.multiRouter.masstransit {

    interface StopModel extends interfaces.IEventEmitter {
        geometry:geometry.base.Point;
        properties:StopModelPropertiesManager;
        segment:multiRouter.masstransit.TransportSegmentModel;
    }

    interface StopModelPropertiesManager extends data.Manager {
        get(path:"index",    defaultValue?:number):number;
        get(path:"id",       defaultValue?:string):string;
        get(path:"name",     defaultValue?:string):string;
        get(path:"lodIndex", defaultValue?:number):number;
    }
}