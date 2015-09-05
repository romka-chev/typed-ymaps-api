namespace ymaps.geometry {

    interface PolygonStatic {
        new(coordinates:number[][][] = [], fillRule:ymaps.FillRules = "evenOdd", options:PolygonOptions = defaultPolygonOptions):Polygon;
    }
    interface Polygon extends interfaces.IPolygonGeometry {
        constructor(coordinates:number[][][] = [], fillRule:ymaps.FillRules = "evenOdd", options:PolygonOptions = defaultPolygonOptions);
    }

    interface PolygonOptions {
        coordRendering?:ymaps.CoordRenderings;
        geodesic      ?:boolean;
        pixelRendering?:ymaps.PixelRenderings;
        projection    ?:interfaces.IProjection;
        simplification?:boolean;
    }

    declare var Polygon:PolygonStatic;
    declare var defaultPolygonOptions:PolygonOptions = {
        coordRendering: "shortestPath",
        geodesic      : false,
        pixelRendering: "jumpy",
        simplification: true
    }
}