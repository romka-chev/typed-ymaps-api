module ymaps {
    export module interfaces {
        declare class IBasePolygonGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():"Polygon";
        }
    }
}