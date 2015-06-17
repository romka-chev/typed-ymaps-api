module ymaps {
    export module interfaces {
        declare class IPixelLineStringGeometry extends IPixelGeometry {
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
            };//todo declare class
            getCoordinates():number[][];
            getLength():number;
        }
    }
}