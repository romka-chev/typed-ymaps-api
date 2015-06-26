module ymaps {
    export module geometryEditor {
        export module model {
            export class RootLineString extends interfaces.IGeometryEditorRootModel {
                getAllVerticesNumber():number;
                getVertexModels():ChildVertex[];
                spliceVertices(start:number, deleteCount:number):number[][];
            }
        }
    }
}