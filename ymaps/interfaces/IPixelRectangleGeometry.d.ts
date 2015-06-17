module ymaps {
    export module interfaces {
        export class IPixelRectangleGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
                pathIndex:number;
            };//todo export class
            getCoordinates():number[][];
            getType():string; // todo determine?
        }
    }
}