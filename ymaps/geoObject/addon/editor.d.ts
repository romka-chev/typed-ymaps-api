namespace ymaps.geoObject.addon {

    interface Editor {
        get(geoObject:interfaces.IGeoObject):interfaces.IGeometryEditor;
    }

    declare var editor:Editor;
}