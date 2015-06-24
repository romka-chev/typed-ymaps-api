module ymaps {
    export module control {
        export class ZoomControl extends interfaces.IControl, interfaces.ICustomizable {

            constructor(parameters?:ZoomControlParameters) {
                super(<any>parameters);
            }

            getMap():Map;

        }
        export class ZoomControlParameters {
            data:ZoomControlParametersData;
            options:ZoomControlParametersOptions;
            state:ZoomControlParametersState;
        }
        export class ZoomControlParametersData {

        }
        export class ZoomControlParametersOptions {
            layout:string|interfaces.IZoomControlLayout;
            position:ZoomControlParametersOptionsPosition;
            size:"small"|"large"|"auto" = "auto";
            visible:boolean             = true;
            zoomDuration:number         = 200;
            zoomStep:number             = 1;
        }
        export class ZoomControlParametersOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = 10;
            right:number|string  = "auto";
            top:number|string    = 108;
        }
        export class ZoomControlParametersState {

        }

    }
}