module ymaps {
    export module interfaces {
        export class IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
            each(callback:Function, context?:any):void;

            get(index:number):IGeoObject;

            getBounds():number[][];
            getIterator():IIterator;

            getLength():number;

            getPixelBounds():number[][];
            indexOf(object:IGeoObject):number;
        }
    }
}