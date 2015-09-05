namespace ymaps.geometryEditor.model {
    interface Edge extends interfaces.IGeometryEditorRootModel {
        getNextVertex():ChildVertex;
        getPrevVertex():ChildVertex;
        setNextVertex(nextVertex:ChildVertex):any;
        setPrevVertex(prevVertex:ChildVertex):any;
    }
}