module ymaps {
    export module interfaces {
        declare class ILineStringGeometry extends IGeometry, ILineStringGeometryAccess {
            getType():"LineString";
        }
    }
}