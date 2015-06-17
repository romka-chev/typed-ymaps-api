module ymaps {
    export module interfaces {
        declare class ICircleGeometry extends ICircleGeometryAccess, IGeometry {
            getType():"Circle";
        }
    }
}