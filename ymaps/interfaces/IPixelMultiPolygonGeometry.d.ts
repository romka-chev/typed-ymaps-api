module ymaps {
    export module interfaces {
        export class IPixelMultiPolygonGeometry extends IPixelGeometry {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):IPixelMultiPolygonGeometryGetClosestResult;
            getCoordinates():number[][][][];

            getFillRule():"evenOdd"|"nonZero";

            getLength():number;
        }
        export interface IPixelMultiPolygonGeometryGetClosestResult{
            position:number[];
            distance:number;
            closestPointIndex:number;
            nextPointIndex?:number;
            prevPointIndex?:number;
            pathIndex:number;
        }
    }
}