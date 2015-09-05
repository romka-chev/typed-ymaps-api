namespace ymaps.geometryEditor.model {
    interface ChildVertex extends interfaces.IGeometryEditorChildModel {
        getAllVerticesNumber():number;
        getIndex():number;
        getNextVertex():ChildVertex;
        getPrevVertex():ChildVertex;
        setGlobalPixels(pixels:number[]):any;
        setIndex(index:number):any;
        setNextVertex(nextVertex:ChildVertex):any;
        setPrevVertex(prevVertex:ChildVertex):any;
    }
}