module ymaps {
    export module interfaces {
        export class IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {
            getType():"LineString";
        }
    }
}