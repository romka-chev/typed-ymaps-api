namespace ymaps.geoObject.addon {

    interface Hint {
        get(geoObject:interfaces.IGeoObject):interfaces.IPopupManager;
    }

    declare var hint:Hint;
}