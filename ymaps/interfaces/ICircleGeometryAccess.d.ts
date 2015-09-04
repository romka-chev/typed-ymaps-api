module ymaps {
    export module interfaces {
        export class ICircleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):ICircleGeometryAccessGetClosestResult;

            getCoordinates():number[];
            setCoordinates(coordinates:number[]):ICircleGeometryAccess;

            getRadius():number;

            setRadius(radius:number):ICircleGeometryAccess;
        }

        export interface ICircleGeometryAccessGetClosestResult{
            position:number[];
            distance:number;
        }
    }
}