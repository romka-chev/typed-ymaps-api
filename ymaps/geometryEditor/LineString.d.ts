namespace ymaps.geometryEditor {

    interface LineStringStatic {
        new(geometry:interfaces.ILineStringGeometry, options:LineStringOptions = defaultLineStringOptions):LineString;
    }
    interface LineString extends interfaces.IGeometryEditor {
        state:ymaps.data.Manager;

        getModel():vow.Promise; // todo check error return; generics
        getModelSync():model.RootLineString;
        getView():vow.Promise;
        getViewSync():view.Path;
        startDrawing():vow.Promise; // todo check error return; generics
        startEditing():vow.Promise; // todo check error return; generics
        startFraming():vow.Promise;
        stopDrawing():void;
        stopEditing():void;
        stopFraming():void;
    }

    interface LineStringOptions {
        dblClickHandler?:Function;
        drawingCursor  ?:boolean|string; // todo report about type error? @detemine?
        drawOver       ?:boolean;
        edgeLayout     ?:Function;
        maxPoints      ?:number;
        menuManager    ?:Function; // todo determine
        vertexLayout   ?:Function;
    }

    declare var LineString:LineStringStatic;
    declare var defaultLineStringOptions:LineStringOptions = {
        drawingCursor: "arrow",
        drawOver     : true,
        maxPoints    : Infinity
    }
}