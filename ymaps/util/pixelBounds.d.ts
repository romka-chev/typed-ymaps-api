module ymaps {
    export module util {
        export var pixelBounds:PixelBounds;

        export class PixelBounds{
            areIntersecting(bounds1:number[][], bounds2:number[][]):boolean;
            containsBounds(outer:number[][], inner:number[][]):boolean;
            containsPoint(bounds:number[][], point:number[]):boolean;
            fromBounds(sourceBounds:number[][][]):number[][];
            fromPoints(points:number[][]):number[][];
            getCenter(bounds:number[][]):number[];
            getIntersection(bounds1:number[][], bounds2:number[][]):number[][];
            getSize(bounds:number[][]):number[];

        }
    }
}