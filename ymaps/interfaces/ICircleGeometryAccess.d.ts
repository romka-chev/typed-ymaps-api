namespace ymaps.interfaces {
    interface ICircleGeometryAccess extends IFreezable {
        contains(position:number[]):boolean;
        getClosest(anchorPosition:number[]):ICircleGeometryAccessGetClosestResult;
        getCoordinates():number[];
        setCoordinates(coordinates:number[]):ICircleGeometryAccess;
        getRadius():number;
        setRadius(radius:number):ICircleGeometryAccess;
    }

    interface ICircleGeometryAccessGetClosestResult {
        position:number[];
        distance:number;
    }
}