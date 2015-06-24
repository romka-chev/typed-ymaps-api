module ymaps {
    export module control {
        export class TrafficControl extends interfaces.IControl, interfaces.ICustomizable {

            data:TrafficControlDataManager;
            state:TrafficControlStateManager;

            constructor(parameters?:TrafficControlParameters) {
                super(<any>parameters);
            }

            collapse():void;

            expand():void;

            getMap():Map;

            getProvider(key?:"traffic#actual"|"traffic#archive"):interfaces.ITrafficProvider;

            hideTraffic():void;

            isExpanded():boolean;

            isTrafficShown():boolean;

            showTraffic():boolean;
        }
        export class TrafficControlParameters {
            options:TrafficControlParametersOptions;
            state:TrafficControlParametersState;
        }
        export class TrafficControlParametersData {

        }
        export class TrafficControlParametersOptions {
            collapseOnBlur:boolean      = true;
            float:"left"|"right"|"none" = "right";
            floatIndex:number           = 200;
            layout:string|Function;
            maxWidth:number|number[]    = [26, 195, 195];
            position:TrafficControlParametersOptionsPosition;
            size:"small"|"large"|"auto" = "auto";
            visible:boolean             = true;

        }
        export class TrafficControlParametersOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = "auto";
            right:number|string  = "auto";
            top:number|string    = "auto";
        }
        export class TrafficControlParametersState {
            providerKey:"traffic#actual"|"traffic#archive" = "traffic#actual";
            trafficShown:boolean                           = false;
        }

        export class TrafficControlDataManager extends data.Manager {
        }
        export class TrafficControlStateManager extends data.Manager {
            get<T>(path:"trafficShown", defaultValue?:T):T|boolean;
            get<T>(path:"providerKey", defaultValue?:T):T|string;
            get<T>(path:"expanded", defaultValue?:T):T|boolean;
        }
    }
}