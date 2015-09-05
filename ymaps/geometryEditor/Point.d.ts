namespace ymaps.geometryEditor {

    interface PointStatic {
        new(geometry:interfaces.IPointGeometry, options:PointOptions = defaultPointOptions):Point;
    }
    interface Point extends interfaces.IGeometryEditor {
        state:ymaps.data.Manager;

        startDrawing():any;
        stopDrawing():any;
    }

    interface PointOptions {
        dblClickHandler?:Function;
        drawingCursor  ?:boolean|string; // todo report about type error?
        drawOver       ?:boolean;
    }

    declare var Point:PointStatic;
    declare var defaultPointOptions:PointOptions = {
        drawingCursor: "arrow",
        drawOver     : true
    }

}