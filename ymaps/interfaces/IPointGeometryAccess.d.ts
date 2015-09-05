namespace ymaps.interfaces {
    export class IPointGeometryAccess {
        getCoordinates():number[];
        setCoordinates(coordinates:number[]):IPointGeometryAccess;
    }
}