namespace ymaps.multiRouter {

    interface EditorStatic {
        new(multiRoute:multiRouter.MultiRoute, state:EditorState = defaultEditorState, options:EditorOptions = defaultEditorOptions):Editor;
    }
    interface Editor extends interfaces.ICustomizable, interfaces.IEventEmitter {

        state:ymaps.data.Manager;

        destroy():any;
        getMultiRoute():multiRouter.MultiRoute;
    }

    interface EditorOptions {
        drawOver     ?:boolean;
        midPointsType?:"way"|"via";
    }
    interface EditorState {
        addWayPoints   ?:boolean;
        dragWayPoints  ?:boolean;
        removeWayPoints?:boolean;
        dragViaPoints  ?:boolean;
        removeViaPoints?:boolean;
        addMidPoints   ?:boolean;
    }

    declare var Editor:EditorStatic;
    declare var defaultEditorOptions:EditorOptions = {
        drawOver     : true,
        midPointsType: "way"
    };
    declare var defaultEditorState:EditorState     = {
        addWayPoints   : false,
        dragWayPoints  : true,
        removeWayPoints: false,
        dragViaPoints  : true,
        removeViaPoints: true,
        addMidPoints   : true
    }

}