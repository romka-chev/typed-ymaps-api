module ymaps {
    export module geometry {
        export module pixel {
            export class Circle extends interfaces.IPixelCircleGeometry {
                getCoordinates():number[];
                getRadius():number;
            }
        }
    }
}