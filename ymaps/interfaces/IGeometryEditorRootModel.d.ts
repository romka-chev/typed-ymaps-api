module ymaps {
    export module interfaces {
        declare class IGeometryEditorRootModel extends IGeometryEditorModel {
            constructor(geometry:IBaseGeometry, editor:IGeometryEditor);
        }
    }
}