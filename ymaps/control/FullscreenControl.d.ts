module ymaps {
    export module control {
        export class FullscreenControl extends Button {

            state:state.Manager;

            constructor(parameters?:FullscreenControlParameters){
                super(<any>parameters);
            }
        }
        export class FullscreenControlParameters{
            data    :FullscreenControlParametersData;
            options :FullscreenControlParametersOptions;
            state   :FullscreenControlParametersState;
        }
        export class FullscreenControlParametersData{
            title:string;
        }
        export class FullscreenControlParametersOptions{
            float       :"left"|"right"|"none"  = "right";
            floatIndex  :number                 = 300;
            maxWidth    :number|number[]        = 28;
            visible     :boolean                = true;
            layout      :string|interfaces.ISelectableControlLayout;
            position    :FullscreenControlParametersOptionsPosition;
        }
        export class FullscreenControlParametersOptionsPosition{
            bottom  :number|string = "auto";
            left    :number|string = "auto";
            top     :number|string = "auto";
            right   :number|string = "auto";
        }
        export class FullscreenControlParametersState{
            enabled :boolean = true;
            selected:boolean = false;
        }
    }
}