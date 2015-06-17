module ymaps {
    export module interfaces {
        declare class IPointGeometry extends IGeometry, IPointGeometryAccess {
            getType():"Point";
        }
    }
}