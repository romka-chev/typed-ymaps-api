namespace ymaps.interfaces {

    interface IMapState {
        applyToMap(map:ymaps.Map):vow.Promise;
    }
}