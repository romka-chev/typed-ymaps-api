module ymaps {
    export module interfaces {
        export class IBaseLinearRingGeometry extends IBaseGeometry, ILinearRingGeometryAccess {
            getType():"LinearRing";
        }
    }
}