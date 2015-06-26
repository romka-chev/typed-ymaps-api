module ymaps {
    export module geometryEditor {
        export class Polygon extends interfaces.IGeometryEditor {
            state:PolygonStateManager;

            constructor(geometry:interfaces.IPolygonGeometry, options?:PolygonOptions);

            getModel():vow.Promise; // todo error return
            getModelSync():model.RootPolygon|undefined; // todo null
            getView():vow.Promise; // todo error return
            getViewSync():view.MultiPath|undefined; // todo null
            startDrawing():vow.Promise; // todo error return
            startEditing():vow.Promise; // todo error return
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