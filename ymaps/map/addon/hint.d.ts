namespace ymaps.map.addon {

    interface Hint {
        // todo check map parameter?
        get():interfaces.IPopupManager;
    }

    declare var hint:Hint;
}