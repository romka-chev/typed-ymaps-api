module ymaps {
    export module interfaces {
        declare class IPixelPointGeometry extends IPixelGeometry {
            getCoordinates():number[];
            getType():string; // todo determine?
        }
    }
}