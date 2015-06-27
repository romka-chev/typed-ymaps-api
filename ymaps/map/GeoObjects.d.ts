module ymaps {
    export module map {
        export class GeoObjects extends interfaces.IGeoObjectCollection {
            constructor(map:Map, options?:any); // todo determine options

            add(child:interfaces.IGeoObject, index?:number):GeoObjects;

            // todo check is it really void
            // todo (item?:IGeoObject) => any?
            each(callback:Function, context?:any):void;

            get(index:number):interfaces.IGeoObject;
            getBounds():number[][]|undefined; // todo null
            getIterator():interfaces.IIterator;
            getLength():number;
            getPixelBounds():number[][]|undefined; // todo null
            indexOf(object:any):number; // todo IGeoObject?
            remove(child:interfaces.IGeoObject):GeoObjects;
            removeAll():GeoObjects;
            set(index:number, child:interfaces.IGeoObject):GeoObjects;

            // todo generics?
            // todo check third parameter?
            // todo report about ambiguous declaration
            splice(index:number, number:number):GeoObjectCollection;
        }
    }
}