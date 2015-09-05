namespace ymaps.interfaces {

    interface ITrafficProvider extends ICustomizable, IEventEmitter {
        getMap():ymaps.Map;
        setMap(map:ymaps.Map):any;
    }
}