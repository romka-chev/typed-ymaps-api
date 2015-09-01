module ymaps {
    export module router {
        export class Editor extends interfaces.ICustomizable, interfaces.IEventEmitter {

            state:EditorStateManager;

            start(options?:EditorStartOptions):any;
            stop():any;
        }

        export class EditorStateManager extends interfaces.IDataManager {
            //noinspection SpellCheckingInspection
            routeloading:boolean;
            //noinspection SpellCheckingInspection
            waypointsdrag:boolean;
            //noinspection SpellCheckingInspection
            viapointsdrag:boolean;
        }

        export class EditorStartOptions {
            addViaPoints:boolean    = true;
            addWayPoints:boolean    = false;
            editViaPoints:boolean   = true;
            editWayPoints:boolean   = true;
            removeViaPoints:boolean = true;
            removeWayPoints:boolean = false;
        }
    }
}