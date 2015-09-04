module ymaps {
    export module geometryEditor {
        export class LineString extends interfaces.IGeometryEditor {
            state:LineStringStateManager;

            constructor(geometry:interfaces.ILineStringGeometry, options?:LineStringOptions);

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

        export class LineStringOptions {
            dblClickHandler:Function;
            drawingCursor:boolean|string = "arrow"; // todo report about type error?
            drawOver:boolean = true;
            edgeLayout:Function;
            maxPoints:number = Infinity;
            menuManager:Function; // todo determine
            vertexLayout:Function;
        }

        export class LineStringStateManager extends interfaces.IDataManager{
            get<T>(path:"editing",     defaultValue:T):T|boolean;
            get<T>(path:"drawing",     defaultValue:T):T|boolean;
            get<T>(path:"drawingFrom", defaultValue:T):T|"begin"|"end";
        }
    }
}