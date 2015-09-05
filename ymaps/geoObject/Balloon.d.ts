namespace ymaps.geoObject {

    interface BalloonStatic {
        new(geoObject:any):Balloon; // todo GeoObject type?
    }
    interface Balloon extends interfaces.IBalloonManager {
        open(position?:number[], data?:any, options?:any):vow.Promise;
        setData(data?:any):vow.Promise;
    }

    declare var Balloon:BalloonStatic;
}