module ymaps {
    export module interfaces {
        export class IRectangleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;

            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
            };//todo export class
            getCoordinates():number[][];

            setCoordinates(coordinates:number[][]):IRectangleGeometryAccess;
        }
    }
}