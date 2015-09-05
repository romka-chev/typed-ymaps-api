namespace ymaps.interfaces {

    interface IPane extends IEventEmitter {
        destroy():any;
        getElement():HTMLElement;
        getMap():ymaps.Map;
        getOverflow():"visible"|"hidden";
        getZIndex():number;
    }
}