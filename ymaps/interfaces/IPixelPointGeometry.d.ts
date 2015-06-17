module ymaps {
    export module interfaces {
        export class IPixelPointGeometry extends IPixelGeometry {
            getCoordinates():number[];

            getType():string; // todo determine?
        }
    }
}