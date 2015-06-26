module ymaps {
    export module geometryEditor {
        export module model {
            export class RootPolygon extends interfaces.IGeometryEditorRootModel {
                getAllVerticesNumber():number;
                getPathModels():ChildLinearRing[];
                splicePaths(start:number, deleteCount:number):number[][];
            }
        }
    }
}