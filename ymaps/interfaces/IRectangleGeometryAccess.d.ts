module ymaps {
    export module interfaces {
        export class IRectangleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):IRectangleGeometryAccessGetClosestResult;
            getCoordinates():number[][];

            setCoordinates(coordinates:number[][]):IRectangleGeometryAccess;
        }

        export interface IRectangleGeometryAccessGetClosestResult{
            position:number[];
            distance:number;
        }
    }
}