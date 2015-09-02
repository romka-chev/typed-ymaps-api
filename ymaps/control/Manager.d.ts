module ymaps {
    export module control {
        export class Manager extends interfaces.ICustomizable, interfaces.ISelectableControl {

            events :ManagerEventsManager;
            options:ManagerOptionsManager;
            state  :ManagerStateManager;

            constructor(map:Map, controls?:string[]|interfaces.IControl[], options?:ManagerOptions);

            add(control:"fullscreenControl"
                |"geolocationControl"
                |"routeEditor"
                |"rulerControl"
                |"searchControl"
                |"trafficControl"
                |"typeSelector"
                |"zoomControl"
                |"smallMapDefaultSet"
                |"mediumMapDefaultSet"
                |"largeMapDefaultSet"
                |"default"
                |interfaces.IControl,
                options?:MangerAddOptions):control.Manager;

            each(callback:Function, context:any):Manager;
            get(index:number|string):interfaces.IControl; // todo @null?
            getChildElement(control:interfaces.IControl):vow.Promise;
            getContainer():HTMLElement;
            getMap():Map;
            indexOf(childToFind:string|interfaces.IControl):number;
            remove(control:string|interfaces.IControl):Manager;
        }

        export class MangerAddOptions {
            float:"left"|"right"|"none" = "right";
            floatIndex:number           = 0;
            position:MangerAddOptionsPosition;
        }

        export class MangerAddOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = "auto";
            top:number|string    = "auto";
            right:number|string  = "auto";
        }
        export class ManagerOptions {
            margin:number   = 10;
            pane:interfaces.IPane;
            states:string[] = ["small", "medium", "large"];
        }

        export class ManagerEventsManager extends event.Manager{

        }
        export class ManagerOptionsManager extends option.Manager{

        }
        export class ManagerStateManager extends data.Manager{
            get<T>(path:"size", defaultValue?:T):T|string; // todo check return
        }
    }
}