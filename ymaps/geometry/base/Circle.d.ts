namespace ymaps.geometry.base {

    interface CircleStatic {
        new(coordinates:number[] = null, radius:number = 0):Circle;
    }
    interface Circle extends interfaces.IBaseCircleGeometry {
        events:event.Manager;
    }

    declare var Circle:CircleStatic;
}