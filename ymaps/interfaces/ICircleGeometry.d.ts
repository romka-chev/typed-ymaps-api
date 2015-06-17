module ymaps {
    export module interfaces {
        export class ICircleGeometry extends ICircleGeometryAccess, IGeometry {
            getType():"Circle";
        }
    }
}