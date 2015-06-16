module ymaps {
    export module interfaces {
        export interface ICircleGeometryAccess extends IFreezable {
            contains(position:number[]):boolean;
            getClosest(anchorPosition:number[]):any;

            getCoordinates():number[]|undefined; //todo null?
            setCoordinates(coordinates:number[]|undefined):ICircleGeometryAccess; //todo null?

            getRadius():number;
            setRadius(radius:number):ICircleGeometryAccess;
        }
    }
}