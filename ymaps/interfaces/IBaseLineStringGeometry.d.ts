module ymaps {
    export module interfaces {
        export interface IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {
            getType():string;
        }
    }
}