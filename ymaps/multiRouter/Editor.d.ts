module ymaps {
    export module multiRouter {
        class Editor extends interfaces.ICustomizable, interfaces.IEventEmitter {

            state:EditorStateManager;

            constructor(multiRoute:multiRouter.MultiRoute, state?:EditorState, options?:EditorOptions);

            destroy():any;

            getMultiRoute():multiRouter.MultiRoute;
        }


        export class EditorOptions {
            drawOver:boolean          = true;
            midPointsType:"way"|"via" = "way";
        }

        export class EditorState {
            addWayPoints:boolean    = false;
            dragWayPoints:boolean   = true;
            removeWayPoints:boolean = false;
            dragViaPoints:boolean   = true;
            removeViaPoints:boolean = true;
            addMidPoints:boolean    = true;
        }
        export class EditorStateManager extends data.Manager {
            get<T>(path:"addWayPoints", defaultValue:T):T|boolean;
            get<T>(path:"dragWayPoints", defaultValue:T):T|boolean;
            get<T>(path:"removeWayPoints", defaultValue:T):T|boolean;
            get<T>(path:"dragViaPoints", defaultValue:T):T|boolean;
            get<T>(path:"removeViaPoints", defaultValue:T):T|boolean;
            get<T>(path:"addMidPoints", defaultValue:T):T|boolean;

            // todo setters ?
        }
    }
}