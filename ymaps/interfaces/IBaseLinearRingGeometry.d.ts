module ymaps {
    export module interfaces {
        export interface IBaseLinearRingGeometry extends IBaseGeometry, ILinearRingGeometryAccess {
            getType():string;
        }
    }
}