module ymaps {
    export module interfaces {
        declare class IPixelMultiPolygonGeometry extends IPixelGeometry {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
                pathIndex:number;
            };//todo declare class
            getCoordinates():number[][][][];
            getFillRule():"evenOdd"|"nonZero";
            getLength():number;
        }
    }
}