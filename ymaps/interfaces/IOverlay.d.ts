module ymaps {
    export module interfaces {
        export class IOverlay extends ICustomizable, IDomEventEmitter {
            getData():any;

            getGeometry():IPixelGeometry;

            getMap():ymaps.Map;
            getShape():IShape;
            isEmpty():boolean;

            setData(data:any):void;

            setGeometry(geometry:IPixelGeometry):void;

            setMap(map:ymaps.Map):void;
        }
    }
}