namespace ymaps.geometryEditor.view {

    interface MultiPath {
        getEdgePlacemarks():GeoObjectCollection;
        getPathViews():Path[];
        getVertexPlacemarks():GeoObjectCollection;
    }
}