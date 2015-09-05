namespace ymaps.behaviour {

    interface RouteEditorStatic {
        new():RouteEditor;
    }
    interface RouteEditor extends ymaps.interfaces.IBehavior {
    }


    declare var RouteEditor:RouteEditorStatic;
}