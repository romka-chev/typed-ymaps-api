namespace ymaps.interfaces {
    interface IDataManager extends IEventEmitter {
        // todo @report about defaultValue is not required?
        // todo in https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/data.Manager-docpage/#get it is not
        get(path:string, defaultValue?:any):any;
    }
}