module ymaps {
    export module interfaces {
        declare class IBaseCircleGeometry extends IBaseGeometry, ICircleGeometryAccess {
            getType():"Circle";
        }
    }
}