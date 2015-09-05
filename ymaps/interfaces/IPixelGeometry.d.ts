namespace ymaps.interfaces {
    interface IPixelGeometry extends IBaseGeometry {
        equals(geometry:IPixelGeometry):boolean;
        getMetaData():any;
        scale(factor:number):IPixelGeometry;
        shift(offset:number[]):IPixelGeometry;
    }
}