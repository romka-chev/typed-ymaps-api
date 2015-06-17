module ymaps {
    export module interfaces {
        export class IParentOnMap extends IPixelGeometry {
            getCoordinates():number[];
            getRadius():number;
        }
    }
}