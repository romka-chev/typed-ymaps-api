namespace ymaps.geoObject {

    interface HintStatic {
        new(geoObject:any):Hint; // todo GeoObject type?
    }
    interface Hint extends interfaces.IHintManager {
        open(position?:number[], data?:any, options?:any):vow.Promise;
        setData(data?:any):vow.Promise;
    }

    declare var Hint:HintStatic;
}