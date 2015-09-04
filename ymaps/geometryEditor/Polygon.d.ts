module ymaps {
    export module geometryEditor {
        export class Polygon extends interfaces.IGeometryEditor {
            state:PolygonStateManager;

            constructor(geometry:interfaces.IPolygonGeometry, options?:PolygonOptions);

            getModel():vow.Promise; // todo error return; generics
            getModelSync():model.RootPolygon;
            getView():vow.Promise; // todo error return; generics
            getViewSync():view.MultiPath;
            startDrawing():vow.Promise; // todo error return; generics
            startEditing():vow.Promise; // todo error return; generics
            startFraming():vow.Promise;
            stopDrawing():void;
            stopEditing():void;
            stopFraming():void;
        }

        export class PolygonOptions {
            dblClickHandler:Function;
            drawingCursor:boolean|string = "arrow"; // todo report about type error?
            drawOver:boolean = true;
            edgeLayout:Function;
            maxPoints:number = Infinity;
            menuManager:Function; // todo determine
            vertexLayout:Function;
        }

        export class PolygonStateManager extends interfaces.IDataManager {
            get<T>(path:"editing",          defaultValue:T):T|boolean;
            get<T>(path:"drawing",          defaultValue:T):T|boolean;
            get<T>(path:"drawingFrom",      defaultValue:T):T|"begin"|"end";
            //get<T>(path:"drawingFromIndex", defaultValue:T):T|boolean; // write-only
            get<T>(path:"drawingPath",      defaultValue:T):T|number;

            // todo setters
        }
    }
}