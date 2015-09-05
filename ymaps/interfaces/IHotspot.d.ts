namespace ymaps.interfaces {

    interface IHotspot extends IDomEventEmitter {
        getShape():IShape;
        setShape(shape:IShape):any;
        getZIndex():number;
        setZIndex(zIndex:number):any;
    }
}