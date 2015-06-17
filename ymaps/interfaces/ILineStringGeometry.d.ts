module ymaps {
    export module interfaces {
        export class ILineStringGeometry extends IGeometry, ILineStringGeometryAccess {
            getType():"LineString";
        }
    }
}