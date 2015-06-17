module ymaps {
    export module interfaces {
        export class IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {
            getType():"Point";
        }
    }
}