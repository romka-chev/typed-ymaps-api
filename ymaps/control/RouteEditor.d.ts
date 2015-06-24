module ymaps {
    export module control {
        export class RouteEditor extends Button {
            constructor(parameters?:RouteEditorParameters){
                super(<any>parameters);
            }

            getRoute():router.Route;
        }

        export class RouteEditorParameters {
            data:RouteEditorParametersData;
            options:RouteEditorParametersOptions;
            state:RouteEditorParametersState;
        }
        export class RouteEditorParametersData {
            image:string = "routes";
            title:string;
        }
        export class RouteEditorParametersOptions {
            float:"left"|"right"|"none" = "right";
            floatIndex:number           = 100;
            layout:string|interfaces.ISelectableControlLayout;
            maxWidth:number|number[]    = 28;
            position:RouteEditorParametersOptionsPosition;
            visible:boolean             = true;
        }
        export class RouteEditorParametersOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = "auto";
            top:number|string    = "auto";
            right:number|string  = "auto";
        }
        export class RouteEditorParametersState {

        }
    }
}