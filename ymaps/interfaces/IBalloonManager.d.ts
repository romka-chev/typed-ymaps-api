module ymaps {
    export module interfaces {
        export interface IBalloonManager extends IPopupManager {
            autoPan():vow.Promise;
        }
    }
}