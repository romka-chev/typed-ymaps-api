module ymaps {
    export module interfaces {
        declare class IBaseRectangleGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():"Rectangle";
        }
    }
}