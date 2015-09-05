namespace ymaps.interfaces {

    interface IPointGeometryAccess {
        getCoordinates():number[];
        setCoordinates(coordinates:number[]):IPointGeometryAccess;
    }
}