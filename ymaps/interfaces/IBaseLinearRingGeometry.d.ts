module ymaps {
    export module interfaces {
        declare class IBaseLinearRingGeometry extends IBaseGeometry, ILinearRingGeometryAccess {
            getType():"LinearRing";
        }
    }
}