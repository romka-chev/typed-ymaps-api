module ymaps {
    export module interfaces {
        export class IPolygonGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;

            get(index:number):number[][];

            getChildGeometry(index:number):ILinearRingGeometryAccess; // todo typo?
            getClosest(anchorPosition:number[]):IPolygonGeometryAccessGetClosestResult;
            getCoordinates():number[][];

            getFillRule():string; // todo determine?
            getLength():number;

            insert(index:number, path:number[][]):IPolygonGeometryAccess;

            remove(index:number):IPolygonGeometryAccess;

            set(index:number, path:number[][]):IPolygonGeometryAccess;

            setCoordinates(coordinates:number[][][]):IPolygonGeometryAccess;

            setFillRule(fillRule:string):IPolygonGeometryAccess; // todo determine?
            splice(index:number, number:number):ILinearRingGeometryAccess[];
        }

        export interface IPolygonGeometryAccessGetClosestResult{
            position:number[];
            distance:number;
            closestPointIndex:number;
            nextPointIndex?:number;
            prevPointIndex?:number;
            pathIndex:number;
            pathIndex:number;
        }
    }
}