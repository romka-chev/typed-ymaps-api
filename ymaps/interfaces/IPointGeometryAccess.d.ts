module ymaps {
    export module interfaces {
        declare class IPointGeometryAccess {
            getCoordinates():number[]|undefined; // todo null?
            setCoordinates(coordinates:number[]|undefined):IPointGeometryAccess; // todo null?
        }
    }
}