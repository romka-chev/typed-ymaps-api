namespace ymaps.coordSystem {

    // todo check is this constructions correct
    interface GeoCoordSystemStatic {
        new(scale:number|number[] = 1):GeoCoordSystem;
        (scale:number|number[] = 1):GeoCoordSystem;
    }
    interface GeoCoordSystem extends ymaps.interfaces.ICoordSystem {
    }

    declare var geo:GeoCoordSystemStatic;
}