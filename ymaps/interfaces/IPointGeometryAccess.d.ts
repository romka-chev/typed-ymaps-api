module ymaps {
    export module interfaces {
        export class IPointGeometryAccess {
            getCoordinates():number[];
            setCoordinates(coordinates:number[]):IPointGeometryAccess;
        }
    }
}