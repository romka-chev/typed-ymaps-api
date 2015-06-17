module ymaps {
    export module interfaces {
        declare class IMapState  {
            applyToMap(map:ymaps.Map):vow.Promise;
        }
    }
}