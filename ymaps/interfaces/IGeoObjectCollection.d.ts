namespace ymaps.interfaces {

    interface IGeoObjectCollection extends ICustomizable, IEventEmitter, IParentOnMap {
        add(child:IGeoObject, index?:number):IGeoObjectCollection;
        each(callback:Function, context?:any):any;
        get(index:number):IGeoObject;
        getBounds():number[][];
        getIterator():IIterator;
        getLength():number;
        getPixelBounds():number[][];
        indexOf(object:any):number;
        remove(child:IGeoObject):IGeoObjectCollection;
        removeAll():IGeoObjectCollection;
        set(index:number, child:IGeoObject):IGeoObjectCollection;
        splice(index:number, number:number):IGeoObjectCollection;
    }
}