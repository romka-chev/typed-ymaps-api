module ymaps {
    export module interfaces {
        export class IGeometryEditorRootModel extends IGeometryEditorModel {
            constructor(geometry:IBaseGeometry, editor:IGeometryEditor);
        }
    }
}