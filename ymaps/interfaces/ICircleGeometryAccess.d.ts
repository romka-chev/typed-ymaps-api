module ymaps {
    export module interfaces {
        declare class ICircleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
            };// todo declare class

            getCoordinates():number[]|undefined; //todo null?
            setCoordinates(coordinates:number[]|undefined):ICircleGeometryAccess; //todo null?

            getRadius():number;
            setRadius(radius:number):ICircleGeometryAccess;
        }
    }
}