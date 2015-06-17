module ymaps {
    export module interfaces {
        export class IPixelLineStringGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
            };//todo export class
            getCoordinates():number[][];
            getLength():number;
        }
    }
}