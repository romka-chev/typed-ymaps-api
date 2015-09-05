namespace ymaps.geometry.pixel {

    interface PointStatic {
        new(position:number[], metaData?:any):Point;
    }
    interface Point extends interfaces.IPixelPointGeometry {
    }

    declare var Point:PointStatic;
}