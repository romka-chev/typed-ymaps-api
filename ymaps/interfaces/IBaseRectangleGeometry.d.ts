module ymaps {
    export module interfaces {
        export interface IBaseRectangleGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():string;
        }
    }
}