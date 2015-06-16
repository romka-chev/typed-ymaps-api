module ymaps {
    export module interfaces {
        export interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
            each(callback:Function, context?:any):void;
            get(index:number):IGeoObject;
            getBounds():number[][]|undefined; // todo null?
            getIterator():IIterator;
            getLength():number;
            getPixelBounds():number[][]|undefined; // todo null?
            indexOf(object:IGeoObject):number;
        }
    }
}