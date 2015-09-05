namespace ymaps.interfaces {

    interface IShape {
        contains(position:number[]):boolean;
        equals(shape:IShape):boolean;
        getBounds():number[][];
        getGeometry():IPixelGeometry;
        getType():string; // todo determine?
        scale(factor:number):IShape;
        shift(offset:number[]):IShape;
    }
}