namespace ymaps.interfaces {

    interface IPixelPolygonGeometry extends IPixelGeometry {
        contains(position:number[]):boolean;
        getClosest(anchorPosition:number[]):IPixelPolygonGeometryGetClosestResult;
        getCoordinates():number[][][];
        getFillRule():ymaps.FillRules;
        getLength():number;
        getType():string; // todo determine? Polygon for sure
    }

    interface IPixelPolygonGeometryGetClosestResult {
        position:number[];
        distance:number;
        closestPointIndex:number;
        nextPointIndex?:number;
        prevPointIndex?:number;
        pathIndex:number;
    }
}