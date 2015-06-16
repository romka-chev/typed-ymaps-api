module ymaps {
    export module interfaces {
        export interface ICircleGeometry extends ICircleGeometryAccess, IGeometry {
            getType():string;
        }
    }
}