module ymaps {
    export module interfaces {
        export interface IBaseCircleGeometry extends IBaseGeometry, ICircleGeometryAccess {
            getType():string;
        }
    }
}