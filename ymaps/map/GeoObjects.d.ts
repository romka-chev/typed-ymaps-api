namespace ymaps.map {

    interface GeoObjectsStatic {
        new(map:Map, options:GeoObjectsOptions = defaultGeoObjectsOptions):GeoObjects; // todo determine options
    }
    interface GeoObjects extends interfaces.IGeoObjectCollection {
        add(child:interfaces.IGeoObject, index?:number):GeoObjects;
        // todo check is it really void
        // todo (item?:IGeoObject) => any?
        each(callback:Function, context?:any):void;
        remove(child:interfaces.IGeoObject):GeoObjects;
        removeAll():GeoObjects;
        set(index:number, child:interfaces.IGeoObject):GeoObjects;
        // todo generics?
        // todo check third parameter?
        // todo report about ambiguous declaration
        splice(index:number, number:number):GeoObjectCollection;
    }

    interface GeoObjectsOptions {

    }

    declare var GeoObjects:GeoObjectsStatic;
    declare var defaultGeoObjectsOptions:GeoObjectsOptions = {}
}