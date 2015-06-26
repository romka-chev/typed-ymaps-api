module ymaps {
    export module geometryEditor {
        export module view {
            export class Path {
                getEdgePlacemarks():GeoObjectCollection;
                getEdgeViews():Edge[];
                getVertexPlacemarks():GeoObjectCollection;
                getVertexViews():Vertex[];
            }
        }
    }
}