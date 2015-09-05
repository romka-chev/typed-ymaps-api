namespace ymaps.geometryEditor {

    interface PolygonStatic {
        new(geometry:interfaces.IPolygonGeometry, options:PolygonOptions = defaultPolygonOptions):Polygon;
    }
    interface Polygon extends interfaces.IGeometryEditor {
        state:ymaps.data.Manager;

        getModel():vow.Promise; // todo error return; generics
        getModelSync():model.RootPolygon;
        getView():vow.Promise; // todo error return; generics
        getViewSync():view.MultiPath;
        startDrawing():vow.Promise; // todo error return; generics
        startEditing():vow.Promise; // todo error return; generics
        startFraming():vow.Promise;
        stopDrawing():any;
        stopEditing():any;
        stopFraming():any;
    }

    interface PolygonOptions {
        dblClickHandler?:Function;
        drawingCursor  ?:boolean|string; // todo report about type error? @determine
        drawOver       ?:boolean;
        edgeLayout     ?:Function;
        maxPoints      ?:number;
        menuManager    ?:Function; // todo determine
        vertexLayout   ?:Function;
    }

    declare var Polygon:PolygonStatic;
    declare var defaultPolygonOptions:PolygonOptions = {
        drawingCursor: "arrow",
        drawOver     : true,
        maxPoints    : Infinity
    }

}