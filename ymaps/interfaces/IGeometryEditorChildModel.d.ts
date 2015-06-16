module ymaps {
    export module interfaces {
        export interface IGeometryEditorChildModel extends IGeometryEditorModel {
            editor:IGeometryEditor;
            geometry:IBaseGeometry;

            new(geometry:IBaseGeometry, editor:IGeometryEditor, pixels:number[], parent:IGeometryEditorModel):IGeometryEditorChildModel;
            getParent():IGeometryEditorModel;
            setPixels(pixels:number[]):void;
        }
    }
}