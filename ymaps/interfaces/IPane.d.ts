module ymaps {
    export module interfaces {
        declare class IPane extends IEventEmitter {
            destroy():void;
            getElement():HTMLElement;
            getMap():ymaps.Map;
            getOverflow():"visible"|"hidden";
            getZIndex():number;
        }
    }
}