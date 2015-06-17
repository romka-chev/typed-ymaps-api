module ymaps {
    export module interfaces {
        declare class IHotspot extends IDomEventEmitter{
            getShape():IShape;
            setShape(shape:IShape):void;
            getZIndex():number;
            setZIndex(zIndex:number):void;
        }
    }
}