module ymaps {
    export module control {
        export class Button extends interfaces.ICustomizable, interfaces.ISelectableControl {

            data:ButtonDataManager;
            state:ButtonStateManager;

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

        class ButtonDataManager extends data.Manager{
            get<T>(path:"image",   defaultValue?:T):T|string;
            get<T>(path:"content", defaultValue?:T):T|string;
            get<T>(path:"title",   defaultValue?:T):T|string;
        }
        class ButtonStateManager extends data.Manager{
            get<T>(path:"selected", defaultValue?:T):T|boolean;
            get<T>(path:"enabled",  defaultValue?:T):T|boolean;
            get<T>(path:"size",     defaultValue?:T):T|"auto"|"small"|"medium"|"large";
        }
    }
}