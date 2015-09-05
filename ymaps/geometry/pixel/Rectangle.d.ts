namespace ymaps.geometry.pixel {

    interface RectangleStatic {
        new(coordinates:number[][] = null, metaData?:any):Rectangle;
    }
    interface Rectangle extends ymaps.interfaces.IPixelRectangleGeometry {
    }

    declare var Rectangle:RectangleStatic;
}