module ymaps {
    export module geometryEditor {
        export module view {
            export class MultiPath {
                getEdgePlacemarks():GeoObjectCollection;
                getPathViews():Path[];
                getVertexPlacemarks():GeoObjectCollection;
            }
        }
    }
}