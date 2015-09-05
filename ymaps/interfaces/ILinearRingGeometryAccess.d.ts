namespace ymaps.interfaces {
    interface ILinearRingGeometryAccess extends IFreezable {
        contains(position:number[]):boolean;
        get(index:number):number[];
        set(index:number, coordinates:number[]):ILinearRingGeometryAccess;
        getCoordinates():number[][];
        setCoordinates(coordinates:number[][]):ILinearRingGeometryAccess;
        getFillRule():string; // todo determine?
        setFillRule(fillRule:string):ILinearRingGeometryAccess; // todo determine?
        insert(index:number, coordinates:number):ILinearRingGeometryAccess;
        remove(index:number):number[];
        splice(index:number, number:number):number[][];
        getChildGeometry(index:number):IPointGeometryAccess;
        getClosest(anchorPosition:number[]):ILinearRingGeometryAccessGetClosestResult;
        getLength():number;
    }

    interface ILinearRingGeometryAccessGetClosestResult {
        position:number[];
        distance:number;
        closestPointIndex:number;
        nextPointIndex?:number;
        prevPointIndex?:number;
    }
}