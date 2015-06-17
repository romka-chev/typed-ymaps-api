module ymaps {
    export module interfaces {
        export class IShape {
            contains(position:number[]):boolean;

            equals(shape:IShape):boolean;

            getBounds():number[][]|undefined; // todo null?
            getGeometry():IPixelGeometry;

            getType():string; // todo determine?
            scale(factor:number):IShape;

            shift(offset:number[]):IShape;
        }
    }
}