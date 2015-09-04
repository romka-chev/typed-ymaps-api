module ymaps {
    export module interfaces {
        export class IPixelRectangleGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):IPixelRectangleGeometryGetClosestResult;
            getCoordinates():number[][];

            getType():string; // todo determine?
        }

        export interface IPixelRectangleGeometryGetClosestResult{
            position:number[];
            distance:number;
            closestPointIndex:number;
            nextPointIndex?:number;
            prevPointIndex?:number;
            pathIndex:number;
        }
    }
}