module ymaps {
    export module interfaces {
        declare class IBalloonManager extends IPopupManager {
            autoPan():vow.Promise;
        }
    }
}