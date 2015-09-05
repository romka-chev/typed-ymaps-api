namespace ymaps.geometry {

    interface PointStatic {
        new(position?:number[], options:PointOptions = defaultPointOptions):Point;
    }
    interface Point extends interfaces.IPointGeometry {
    }

    interface PointOptions {
        pixelRendering?:ymaps.PixelRenderings;
        projection    ?:interfaces.IProjection;
    }

    declare var Point:PointStatic;
    declare var defaultPointOptions:PointOptions = {
        pixelRendering: "jumpy"
    }
}