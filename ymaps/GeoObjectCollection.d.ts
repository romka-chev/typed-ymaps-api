module ymaps {
    export class GeoObjectCollection extends interfaces.IGeoObject, interfaces.IGeoObjectCollection {
        constructor(feature?:GeoObjectCollectionFeature, options?:GeoObjectOptions); // todo check options carefully

        add(child:interfaces.IGeoObject):GeoObjectCollection;

        each(callback:Function, context?:any):void; // todo duplicate parent? determine (item?:interfaces.IGeoObject) => any ?
        getBounds():number[][]|undefined; // todo null? duplicate parent?
        getIterator():interfaces.IIterator;  // todo duplicate parent?
        getLength():number;  // todo duplicate parent?
        getPixelBounds():number[][]|undefined; // todo null? duplicate parent?
        remove(child:interfaces.IGeoObject):GeoObjectCollection; // todo duplicate parent?
        removeAll():GeoObjectCollection; // todo duplicate parent?
        set(index:number, child:interfaces.IGeoObject):GeoObjectCollection; // todo duplicate parent?
        splice(index:number, number:number):GeoObjectCollection;  // todo duplicate parent?
        toArray():interfaces.IGeoObject[];
    }

    export class GeoObjectCollectionFeature {
        children:interfaces.IGeoObject[];
        geometry:interfaces.IGeometry|any;
        properties:interfaces.IDataManager|Object;
    }
}