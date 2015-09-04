module ymaps {
    export module geometryEditor {
        export module model {
            export class ChildVertex extends interfaces.IGeometryEditorChildModel {
                getAllVerticesNumber():number;
                getIndex():number;
                getNextVertex():ChildVertex;
                getPrevVertex():ChildVertex;
                setGlobalPixels(pixels:number[]):void;
                setIndex(index:number):void;
                setNextVertex(nextVertex:ChildVertex):void;
                setPrevVertex(prevVertex:ChildVertex):void;
            }
        }
    }
}