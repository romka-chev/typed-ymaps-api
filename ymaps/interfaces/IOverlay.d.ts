module ymaps {
    export module interfaces {
        declare class IOverlay extends  ICustomizable, IDomEventEmitter{
            getData():any;
            getGeometry():IPixelGeometry;
            getMap():ymaps.Map|undefined; //todo null?
            getShape():IShape|undefined; //todo null?
            isEmpty():boolean;
            setData(data:any):void;
            setGeometry(geometry:IPixelGeometry):void;
            setMap(map:ymaps.Map|undefined):void; // todo null?
        }
    }
}