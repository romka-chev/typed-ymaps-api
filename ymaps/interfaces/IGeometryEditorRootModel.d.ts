module ymaps {
    export module interfaces {
        export interface IGeometryEditorRootModel extends IGeometryEditorModel {
            new(geometry:IBaseGeometry, editor:IGeometryEditor):IGeometryEditorRootModel;
        }
    }
}