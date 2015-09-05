namespace ymaps.geometry {

    interface CircleStatic {
        new(coordinates:number[] = null, radius:number = 0, options:CircleOptions = defaultCircleOptions):Circle;
    }
    interface Circle extends interfaces.ICircleGeometry {
    }

    interface CircleOptions {
        geodesic      ?:boolean;
        pixelRendering?:ymaps.PixelRenderings;
        projection    ?:interfaces.IProjection;
    }

    declare var Circle:CircleStatic;
    declare var defaultCircleOptions:CircleOptions = {
        geodesic      : false,
        pixelRendering: "jumpy"
    }
}