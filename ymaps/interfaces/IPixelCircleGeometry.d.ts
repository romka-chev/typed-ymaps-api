module ymaps {
    export module interfaces {
        declare class IParentOnMap extends IPixelGeometry {
            getCoordinates():number[];
            getRadius():number;
        }
    }
}