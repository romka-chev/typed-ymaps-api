module ymaps {
    export module interfaces {
        export class IMapState  {
            applyToMap(map:ymaps.Map):vow.Promise;
        }
    }
}