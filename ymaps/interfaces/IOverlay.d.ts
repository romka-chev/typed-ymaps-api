namespace ymaps.interfaces {

    interface IOverlay extends ICustomizable, IDomEventEmitter {
        getData():any;
        getGeometry():IPixelGeometry;
        getMap():ymaps.Map;
        getShape():IShape;
        isEmpty():boolean;
        setData(data:any):any;
        setGeometry(geometry:IPixelGeometry):any;
        setMap(map:ymaps.Map):any;
    }
}