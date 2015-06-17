module ymaps {
    export module interfaces {
        declare class IPixelGeometry extends IBaseGeometry {
            equals(geometry:IPixelGeometry):boolean;
            getMetaData():any;
            scale(factor:number):IPixelGeometry;
            shift(offset:number[]):IPixelGeometry;
        }
    }
}