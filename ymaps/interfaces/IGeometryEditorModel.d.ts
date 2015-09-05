namespace ymaps.interfaces {

    interface IGeometryEditorModelStatic{
        new(geometry:IBaseGeometry, editor:IGeometryEditor):IGeometryEditorModel;
    }
    interface IGeometryEditorModel extends IEventEmitter {
        destroy():void;
        getPixels():number[];
    }
}