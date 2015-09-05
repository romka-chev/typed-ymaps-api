namespace ymaps.interfaces {

    interface IPixelRectangleGeometry extends IPixelGeometry {
        getClosest(anchorPosition:number[]):IPixelRectangleGeometryGetClosestResult;
        getCoordinates():number[][];
        getType():string; // todo determine? Rectangle for sure
    }

    interface IPixelRectangleGeometryGetClosestResult {
        position:number[];
        distance:number;
        closestPointIndex:number;
        nextPointIndex?:number;
        prevPointIndex?:number;
        pathIndex:number;
    }
}