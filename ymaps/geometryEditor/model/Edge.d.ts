module ymaps {
    export module geometryEditor {
        export module model {
            export class Edge extends interfaces.IGeometryEditorRootModel {
                getNextVertex():ChildVertex|undefined; // todo null
                getPrevVertex():ChildVertex|undefined; // todo null
                setNextVertex(nextVertex:ChildVertex|undefined):void;  // todo null
                setPrevVertex(prevVertex:ChildVertex|undefined):void;  // todo null
            }
        }
    }
}