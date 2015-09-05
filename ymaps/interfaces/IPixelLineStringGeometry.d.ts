namespace ymaps.interfaces {
    interface IPixelLineStringGeometry extends IPixelGeometry {
        getClosest(anchorPosition:number[]):IPixelLineStringGeometryGetClosestResult;
        getCoordinates():number[][];
        getLength():number;
    }

    interface IPixelLineStringGeometryGetClosestResult {
        position:number[];
        distance:number;
        closestPointIndex:number;
        nextPointIndex?:number;
        prevPointIndex?:number;
    }
}