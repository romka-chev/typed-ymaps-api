module ymaps {
    export module interfaces {
        export class IBalloonManager extends IPopupManager {
            autoPan():vow.Promise;
        }
    }
}