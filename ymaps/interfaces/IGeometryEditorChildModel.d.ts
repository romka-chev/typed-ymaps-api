module ymaps {
    export module interfaces {
        export class IGeometryEditorChildModel extends IGeometryEditorModel {
            editor:IGeometryEditor;
            geometry:IBaseGeometry;

            constructor(geometry:IBaseGeometry, editor:IGeometryEditor, pixels:number[], parent:IGeometryEditorModel);

            getParent():IGeometryEditorModel;

            setPixels(pixels:number[]):void;
        }
    }
}