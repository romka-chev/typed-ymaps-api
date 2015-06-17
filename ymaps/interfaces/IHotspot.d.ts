module ymaps {
    export module interfaces {
        export class IHotspot extends IDomEventEmitter {
            getShape():IShape;

            setShape(shape:IShape):void;

            getZIndex():number;

            setZIndex(zIndex:number):void;
        }
    }
}