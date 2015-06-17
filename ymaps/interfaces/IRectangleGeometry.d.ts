module ymaps {
    export module interfaces {
        declare class IRectangleGeometry extends IGeometry, IRectangleGeometryAccess{
            getType():"Rectangle";
        }
    }
}