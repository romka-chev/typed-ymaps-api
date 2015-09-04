module ymaps {
    export module interfaces {
        export class ITrafficProvider extends ICustomizable, IEventEmitter {
            getMap():ymaps.Map;
            setMap(map:ymaps.Map):any;
        }
    }
}