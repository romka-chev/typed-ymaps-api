namespace ymaps.interfaces {

    interface IMapAction extends IEventEmitter {
        begin(mapActionManager:map.action.Manager):any;
        end():any;
    }
}