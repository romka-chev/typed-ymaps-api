namespace ymaps.geometry.pixel {

    interface PolygonStatic {
        new(coordinates:number[][][], fillRule:ymaps.FillRules, metaData:PolygonMetaData = defaultPolygonMetaData):Polygon;
    }
    interface Polygon extends interfaces.IPixelPolygonGeometry {
    }

    interface PolygonMetaData {
        convex?:boolean;
    }

    declare var Polygon:PolygonStatic;
    declare var defaultPolygonMetaData:PolygonMetaData = {
        convex: false
    }
}