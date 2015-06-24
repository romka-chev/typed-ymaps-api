module ymaps {
    export module control {
        export class RulerControl extends Button {
            constructor(parameters?:RulerControlParameters) {
                super(<any>parameters);
            }
        }
        export class RulerControlParameters {
            data:RulerControlParametersData;
            options:RulerControlParametersOptions;
            state:RulerControlParametersState;
        }
        export class RulerControlParametersData {

        }
        export class RulerControlParametersOptions {
            position:RulerControlParametersOptionsPosition;
            scaleLine:boolean = true;
            visible:boolean   = true;
        }
        export class RulerControlParametersOptionsPosition {
            bottom:number|string = 30;
            left:number|string   = "auto";
            right:number|string  = 10;
            top:number|string    = "auto";
        }
        export class RulerControlParametersState {

        }
    }
}