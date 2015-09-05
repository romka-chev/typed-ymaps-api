namespace ymaps.geoObject.addon {

    // todo check is this correct
    interface Balloon {
        get(geoObject:interfaces.IGeoObject):interfaces.IPopupManager;
    }

    declare var balloon:Balloon;
}