module ymaps {
    export module geometryEditor {
        export class Point extends interfaces.IGeometryEditor {
            state:PointStateManager;

            constructor(geometry:interfaces.IPointGeometry, options?:PointOptions);

            startDrawing():void;

            stopDrawing():void;
        }

        export class PointOptions {
            dblClickHandler:Function;
            drawingCursor:boolean|string = "arrow"; // todo report about type error?
            drawOver:boolean = true;
        }

        export class PointStateManager extends interfaces.IDataManager {
            get<T>(path:"editing", defaultValue:T):T|boolean;
            get<T>(path:"drawing", defaultValue:T):T|boolean;
        }
    }
}