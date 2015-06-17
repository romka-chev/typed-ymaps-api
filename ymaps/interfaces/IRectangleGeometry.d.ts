module ymaps {
    export module interfaces {
        export class IRectangleGeometry extends IGeometry, IRectangleGeometryAccess {
            getType():"Rectangle";
        }
    }
}