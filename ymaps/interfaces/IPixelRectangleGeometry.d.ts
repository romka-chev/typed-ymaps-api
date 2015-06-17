module ymaps {
    export module interfaces {
        declare class IPixelRectangleGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
                pathIndex:number;
            };//todo declare class
            getCoordinates():number[][];
            getType():string; // todo determine?
        }
    }
}