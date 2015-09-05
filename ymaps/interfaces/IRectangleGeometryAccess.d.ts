namespace ymaps.interfaces {

    interface IRectangleGeometryAccess extends IFreezable {
        contains(position:number[]):boolean;
        getClosest(anchorPosition:number[]):IRectangleGeometryAccessGetClosestResult;
        getCoordinates():number[][];
        setCoordinates(coordinates:number[][]):IRectangleGeometryAccess;
    }

    interface IRectangleGeometryAccessGetClosestResult {
        position:number[];
        distance:number;
    }
}