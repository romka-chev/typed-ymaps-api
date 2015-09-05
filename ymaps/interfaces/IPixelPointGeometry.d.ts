namespace ymaps.interfaces {
    interface IPixelPointGeometry extends IPixelGeometry {
        getCoordinates():number[];
        getType():string; // todo determine? Point for sure
    }
}