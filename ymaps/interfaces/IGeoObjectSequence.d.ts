namespace ymaps.interfaces {
    interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
        each(callback:Function, context?:any):any;
        get(index:number):IGeoObject;
        getBounds():number[][];
        getIterator():IIterator;
        getLength():number;
        getPixelBounds():number[][];
        indexOf(object:IGeoObject):number;
    }
}