namespace ymaps.geometryEditor.model {

    interface RootLineString extends interfaces.IGeometryEditorRootModel {
        getAllVerticesNumber():number;
        getVertexModels():ChildVertex[];
        spliceVertices(start:number, deleteCount:number):number[][];
    }
}