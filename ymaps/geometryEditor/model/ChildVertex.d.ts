module ymaps {
    export module geometryEditor {
        export module model {
            export class ChildVertex extends interfaces.IGeometryEditorChildModel {
                getAllVerticesNumber():number;
                getIndex():number;
                getNextVertex():ChildVertex|undefined; // todo null
                getPrevVertex():ChildVertex|undefined; // todo null
                setGlobalPixels(pixels:number[]):void;
                setIndex(index:number):void;
                setNextVertex(nextVertex:ChildVertex|undefined):void;  // todo null
                setPrevVertex(prevVertex:ChildVertex|undefined):void;  // todo null
            }
        }
    }
}