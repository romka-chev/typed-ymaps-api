module ymaps {
    export module interfaces {
        export class IPixelGeometry extends IBaseGeometry {
            equals(geometry:IPixelGeometry):boolean;

            getMetaData():any;

            scale(factor:number):IPixelGeometry;

            shift(offset:number[]):IPixelGeometry;
        }
    }
}