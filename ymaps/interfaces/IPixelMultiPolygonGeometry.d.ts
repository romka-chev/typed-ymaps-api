module ymaps {
    export module interfaces {
        export class IPixelMultiPolygonGeometry extends IPixelGeometry {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
                pathIndex:number;
            };//todo export class
            getCoordinates():number[][][][];

            getFillRule():"evenOdd"|"nonZero";

            getLength():number;
        }
    }
}