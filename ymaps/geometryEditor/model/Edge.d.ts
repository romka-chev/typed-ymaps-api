module ymaps {
    export module geometryEditor {
        export module model {
            export class Edge extends interfaces.IGeometryEditorRootModel {
                getNextVertex():ChildVertex;
                getPrevVertex():ChildVertex;
                setNextVertex(nextVertex:ChildVertex):void;
                setPrevVertex(prevVertex:ChildVertex):void;
            }
        }
    }
}