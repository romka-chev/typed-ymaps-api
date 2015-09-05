namespace ymaps.geometry {

    interface LineStringStatic {
        new(coordinates:number[][] = [], options:LineStringOptions = defaultLineStringOptions):LineString;
    }
    interface LineString extends interfaces.ILineStringGeometry {
        getDistance(from:number = 0, to?:number):number;
    }

    interface LineStringOptions {
        coordRendering?:ymaps.CoordRenderings;
        geodesic      ?:boolean;
        pixelRendering?:ymaps.PixelRenderings;
        projection    ?:interfaces.IProjection;
        simplification?:boolean;
    }

    declare var LineString:LineStringStatic;
    declare var defaultLineStringOptions:LineStringOptions = {
        geodesic      : false,
        pixelRendering: "jumpy",
        simplification: true
    }
}