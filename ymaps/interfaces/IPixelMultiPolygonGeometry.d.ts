namespace ymaps.interfaces {

    interface IPixelMultiPolygonGeometry extends IPixelGeometry {
        contains(position:number[]):boolean;
        getClosest(anchorPosition:number[]):IPixelMultiPolygonGeometryGetClosestResult;
        getCoordinates():number[][][][];
        getFillRule():ymaps.FillRules;
        getLength():number;
    }
    interface IPixelMultiPolygonGeometryGetClosestResult {
        position:number[];
        distance:number;
        closestPointIndex:number;
        nextPointIndex?:number;
        prevPointIndex?:number;
        pathIndex:number;
    }
}