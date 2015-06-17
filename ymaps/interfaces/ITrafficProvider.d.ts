module ymaps {
    export module interfaces {
        export class ITrafficProvider extends ICustomizable, IEventEmitter{
            getMap():ymaps.Map|undefined; // todo null?
            setMap(map:ymaps.Map|undefined); // todo null?
        }
    }
}