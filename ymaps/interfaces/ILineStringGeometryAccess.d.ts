module ymaps {
    export module interfaces {
        export class ILineStringGeometryAccess extends IFreezable {
            getChildGeometry(index:number):IPointGeometryAccess;

            getClosest(anchorPosition:number[]):ILineStringGeometryAccessGetClosestResult;
            getCoordinates():number[][];

            setCoordinates(coordinates:number[][]):ILineStringGeometryAccess;

            getLength():number;

            insert(index:number, coordinates:number[]):ILineStringGeometryAccess;

            remove(index:number):number[];

            get(index:number):number[];

            set(index:number, coordinates:number[]):ILineStringGeometryAccess;

            splice(index:number, number:number):number[][];
        }

        export interface ILineStringGeometryAccessGetClosestResult{
            position:number[];
            distance:number;
            closestPointIndex:number;
            nextPointIndex?:number;
            prevPointIndex?:number;
        }
    }
}