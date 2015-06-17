module ymaps {
    export module interfaces {
        export class IPolygonGeometry extends IGeometry, IPolygonGeometryAccess {
            getType():"Polygon";
        }
    }
}