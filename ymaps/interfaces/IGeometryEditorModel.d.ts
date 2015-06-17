module ymaps {
    export module interfaces {
        declare class IGeometryEditorModel extends IEventEmitter {
            // constructor(geometry:IBaseGeometry, editor:IGeometryEditor); // todo check constructor inheritance

            destroy():void;
            getPixels():number[];
        }
    }
}