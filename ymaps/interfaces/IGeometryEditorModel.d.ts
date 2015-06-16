module ymaps {
    export module interfaces {
        export interface IGeometryEditorModel extends IEventEmitter {
            new(geometry:IBaseGeometry, editor:IGeometryEditor):IGeometryEditorModel;

            destroy():void;
            getPixels():number[];
        }
    }
}