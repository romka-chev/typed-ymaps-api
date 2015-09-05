namespace ymaps.geometry.base {

    interface PolygonStatic {
        new(coordinates:number[][][] = [], fillRule:ymaps.FillRules = "evenOdd"):Polygon;
    }
    interface Polygon extends interfaces.IBasePolygonGeometry {
        events:event.Manager;
    }

    declare var Polygon:PolygonStatic;
}