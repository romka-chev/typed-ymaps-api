namespace ymaps.map {

    interface BalloonStatic {
        new(map:Map):Balloon
    }
    interface Balloon extends ymaps.interfaces.IBalloonManager, ymaps.interfaces.IBalloonSharingManager {
    }

    declare var Balloon:BalloonStatic;
}