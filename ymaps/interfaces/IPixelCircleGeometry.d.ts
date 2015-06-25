module ymaps {
    export module interfaces {
        export class IPixelCircleGeometry extends IPixelGeometry {
            getCoordinates():number[];

            getRadius():number;
        }
    }
}