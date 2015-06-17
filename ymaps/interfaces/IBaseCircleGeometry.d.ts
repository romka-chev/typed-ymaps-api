module ymaps {
    export module interfaces {
        export class IBaseCircleGeometry extends IBaseGeometry, ICircleGeometryAccess {
            getType():"Circle";
        }
    }
}