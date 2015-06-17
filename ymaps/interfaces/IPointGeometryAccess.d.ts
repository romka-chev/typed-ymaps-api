module ymaps {
    export module interfaces {
        export class IPointGeometryAccess {
            getCoordinates():number[]|undefined; // todo null?
            setCoordinates(coordinates:number[]|undefined):IPointGeometryAccess; // todo null?
        }
    }
}