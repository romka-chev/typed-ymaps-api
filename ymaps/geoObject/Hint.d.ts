module ymaps {
    export module geoObject {
        export class Hint extends interfaces.IHintManager {

            constructor(geoObject:any); // todo GeoObject type?

            open(position?:number[], data?:any, options?:any):vow.Promise;

            setData(data?:any):vow.Promise;
        }
    }
}