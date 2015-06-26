module ymaps {
    export module geoObject {
        export class Balloon extends interfaces.IBalloonManager {

            constructor(geoObject:any); // todo GeoObject type?

            open(position?:number[], data?:any, options?:any):vow.Promise;

            setData(data?:any):vow.Promise;
        }
    }
}