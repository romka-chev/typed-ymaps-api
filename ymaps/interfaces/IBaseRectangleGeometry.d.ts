module ymaps {
    export module interfaces {
        export class IBaseRectangleGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():"Rectangle";
        }
    }
}