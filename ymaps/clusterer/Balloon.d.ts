namespace ymaps.clusterer {

    interface BalloonStatic {
        new(clusterer:ymaps.Clusterer):Balloon;
    }
    interface Balloon extends ymaps.interfaces.IBalloonManager {
    }

    declare var Balloon:BalloonStatic;
}