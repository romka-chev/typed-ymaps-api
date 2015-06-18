module ymaps {
    export module control {
        export class Button extends interfaces.ICustomizable, interfaces.ISelectableControl {

            data:data.Manager;
            state:state.Manager;

            constructor(parameters?:ButtonParameters);

            getMap():Map;
        }
        export class ButtonParameters{
            data:ButtonParametersData;
            options:ButtonParametersOptions;
            state:ButtonParametersState;
        }
        export class ButtonParametersData{
            content:string;
            iconType:string;
            image:string;
            title:string;
        }
        export class ButtonParametersOptions{
            float:"left"|"right"|"none" = "right";
            floatIndex:number = 0;
            layout:string|interfaces.ISelectableControlLayout;
            maxWidth:number|number[] = 50;
            position:ButtonParametersOptionsPosition;
            selectOnClick:boolean = true;
            size:"auto"|"small"|"large" = "auto";
            visible:boolean = true;
        }
        export class ButtonParametersOptionsPosition{
            bottom:number|string = "auto";
            left:number|string = "auto";
            top:number|string = "auto";
            right:number|string = "auto";
        }
        export class ButtonParametersState{
            enabled:boolean = true;
            selected:boolean = false;
        }
    }
}