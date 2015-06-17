module ymaps {
    export module interfaces {
        declare class IRectangleGeometryAccess extends IFreezable{
            contains(position:number[]):boolean;
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
            };//todo declare class
            getCoordinates():number[][];
            setCoordinates(coordinates:number[][]):IRectangleGeometryAccess;
        }
    }
}