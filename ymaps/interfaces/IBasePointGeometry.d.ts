module ymaps {
    export module interfaces {
        declare class IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {
            getType():"Point";
        }
    }
}