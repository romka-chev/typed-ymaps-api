module ymaps {
    export module interfaces {
        declare class IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {
            getType():"LineString";
        }
    }
}