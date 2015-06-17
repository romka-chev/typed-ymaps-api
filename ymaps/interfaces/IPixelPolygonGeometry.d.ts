module ymaps {
    export module interfaces {
        declare class IPixelPolygonGeometry extends IPixelGeometry {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
                closestPointIndex:number;
                nextPointIndex?:number;
                prevPointIndex?:number;
                pathIndex:number;
            };//todo declare class
            getCoordinates():number[][][];
            getFillRule():"evenOdd"|"nonZero";
            getLength():number;
            getType():string; // todo determine?
        }
    }
}