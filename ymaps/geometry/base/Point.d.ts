namespace ymaps.geometry.base {

    interface PointStatic {
        new(coordinates?:number[][]):Point;
    }
    interface Point extends interfaces.IBasePointGeometry {
        events:event.Manager;
    }

    declare var Point:PointStatic;
}