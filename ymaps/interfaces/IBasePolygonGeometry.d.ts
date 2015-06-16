module ymaps {
    export module interfaces {
        export interface IBasePolygonGeometry extends IBaseGeometry, IPolygonGeometryAccess {
            getType():string;
        }
    }
}