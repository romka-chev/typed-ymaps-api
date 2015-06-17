module ymaps {
    export module interfaces {
        export class IPointGeometry extends IGeometry, IPointGeometryAccess {
            getType():"Point";
        }
    }
}