namespace ymaps.interfaces {

    interface IGeometryEditorRootModelStatic extends IGeometryEditorModelStatic{
        new(geometry:IBaseGeometry, editor:IGeometryEditor):IGeometryEditorRootModel;
    }
    interface IGeometryEditorRootModel extends IGeometryEditorModel {
    }
}