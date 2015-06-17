module ymaps {
    export module interfaces {
        declare class IPolygonGeometry extends IGeometry, IPolygonGeometryAccess{
            getType():"Polygon";
        }
    }
}