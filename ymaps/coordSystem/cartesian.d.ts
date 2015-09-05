namespace ymaps.coordSystem {

    // todo check is this constructions correct
    interface CartesianCoordSystemStatic {
        new(scale:number|number[] = 1):CartesianCoordSystem;
        (scale:number|number[] = 1):CartesianCoordSystem;
    }
    interface CartesianCoordSystem extends ymaps.interfaces.ICoordSystem {
    }

    declare var cartesian:CartesianCoordSystemStatic;
}