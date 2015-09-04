module ymaps {
    export module interfaces {
        export class IPixelLineStringGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):IPixelLineStringGeometryGetClosestResult;
            getCoordinates():number[][];

            getLength():number;
        }

        export interface IPixelLineStringGeometryGetClosestResult{
            position:number[];
            distance:number;
            closestPointIndex:number;
            nextPointIndex?:number;
            prevPointIndex?:number;
        }
    }
}