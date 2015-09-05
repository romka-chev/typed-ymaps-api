namespace ymaps.geometry.base {

    interface LinearRingStatic {
        new(coordinates:number[] = null, radius:number = 0):LinearRing;
    }
    interface LinearRing extends interfaces.IBaseLinearRingGeometry {
        events:event.Manager;
    }

    declare var LinearRing:LinearRingStatic;
}