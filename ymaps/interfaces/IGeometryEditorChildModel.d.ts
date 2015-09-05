namespace ymaps.interfaces {

    interface IGeometryEditorChildModelStatic extends IGeometryEditorModelStatic{
        new(geometry:IBaseGeometry, editor:IGeometryEditor, pixels:number[], parent:IGeometryEditorModel):IGeometryEditorChildModel;
    }
    interface IGeometryEditorChildModel extends IGeometryEditorModel {
        editor:IGeometryEditor;
        geometry:IBaseGeometry;

        getParent():IGeometryEditorModel;
        setPixels(pixels:number[]):void;
    }
}