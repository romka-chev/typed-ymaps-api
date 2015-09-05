namespace ymaps.geometryEditor.model {

    interface RootPolygon extends interfaces.IGeometryEditorRootModel {
        getAllVerticesNumber():number;
        getPathModels():ChildLinearRing[];
        splicePaths(start:number, deleteCount:number):number[][];
    }
}