module ymaps {
    export module interfaces {
        declare class ITrafficProvider extends ICustomizable, IEventEmitter{
            getMap():ymaps.Map|undefined; // todo null?
            setMap(map:ymaps.Map|undefined); // todo null?
        }
    }
}