namespace ymaps.geometry {

    interface RectangleStatic {
        new(coordinates:number[][] = null, options?:RectangleOptions):Rectangle;
    }
    interface Rectangle extends interfaces.IRectangleGeometry {
        getDistance(from:number = 0, to?:number):number;
    }

    interface RectangleOptions {
        coordRendering?:ymaps.CoordRenderings|"boundsPath"; // todo bad logic
        geodesic      ?:boolean;
        pixelRendering?:ymaps.PixelRenderings;
        projection    ?:interfaces.IProjection;
    }

    declare var Rectangle:RectangleStatic;
    declare var defaultRectangleOptions:RectangleOptions = {
        geodesic      : false,
        pixelRendering: "jumpy"
    }
}