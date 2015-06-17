module ymaps {
    export module interfaces {
        export class IBasePolygonGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():"Polygon";
        }
    }
}