namespace ymaps.interfaces {
    interface IBaseGeometry extends IEventEmitter {
        getBounds():number[][];
        getType():string;
    }
}