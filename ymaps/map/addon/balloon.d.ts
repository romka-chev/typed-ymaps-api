namespace ymaps.map.addon {

    interface Balloon {
        // todo check map parameter?
        get():interfaces.IPopupManager;
    }

    declare var balloon:Balloon;
}