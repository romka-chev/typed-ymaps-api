module ymaps {
    export module interfaces {
        export interface IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {
            getType():string;
        }
    }
}