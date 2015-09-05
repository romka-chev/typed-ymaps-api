namespace ymaps.geometry.pixel {

    interface MultiPolygonStatic {
        new(coordinates:number[][][][], fillRule:ymaps.FillRules, metaData:MultiPolygonMetaData = defaultMultiPolygonMetaData):MultiPolygon;
    }
    interface MultiPolygon extends interfaces.IPixelMultiPolygonGeometry {
    }

    interface MultiPolygonMetaData {
        convex?:boolean;
    }

    declare var MultiPolygon:MultiPolygonStatic;
    declare var defaultMultiPolygonMetaData:MultiPolygonMetaData = {
        convex: false
    }
}