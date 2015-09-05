namespace ymaps.geometryEditor.view {

    interface Path {
        getEdgePlacemarks():GeoObjectCollection;
        getEdgeViews():Edge[];
        getVertexPlacemarks():GeoObjectCollection;
        getVertexViews():Vertex[];
    }
}