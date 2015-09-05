namespace ymaps.control {

    interface RouteEditorStatic {
        new(parameters:RouteEditorParameters = defaultRouteEditorParameters):RouteEditor
    }
    interface RouteEditor extends Button {
        getRoute():router.Route;
    }

    interface RouteEditorParameters {
        data   ?:RouteEditorParametersData;
        options?:RouteEditorParametersOptions;
        state  ?:RouteEditorParametersState;
    }
    interface RouteEditorParametersData {
        image?:string;
        title?:string;
    }
    interface RouteEditorParametersOptions {
        float     ?:ymaps.Float;
        floatIndex?:number;
        layout    ?:string|interfaces.ISelectableControlLayout;
        maxWidth  ?:number|number[];
        position  ?:RouteEditorParametersOptionsPosition;
        visible   ?:boolean;
    }
    interface RouteEditorParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface RouteEditorParametersState {
    }

    declare var RouteEditor:RouteEditorStatic;
    declare var defaultRouteEditorParameters:RouteEditorParameters = {
        data   : {
            image: "routes"
        },
        options: {
            float     : "right",
            floatIndex: 100,
            maxWidth  : 28,
            position  : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            },
            visible   : true,
        }
    }
}