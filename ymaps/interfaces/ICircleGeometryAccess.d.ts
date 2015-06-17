module ymaps {
    export module interfaces {
        export class ICircleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;
            getClosest(anchorPosition:number[]):{
                position:number[];
                distance:number;
            };// todo export class

            getCoordinates():number[]|undefined; //todo null?
            setCoordinates(coordinates:number[]|undefined):ICircleGeometryAccess; //todo null?

            getRadius():number;
            setRadius(radius:number):ICircleGeometryAccess;
        }
    }
}