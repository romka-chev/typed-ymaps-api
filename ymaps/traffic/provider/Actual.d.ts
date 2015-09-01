module ymaps {
    export module traffic {
        export module provider {
            export class Actual extends interfaces.ITrafficProvider {

                state:ActualStateManager;

                constructor(options?:ActualOptions, state?:ActualState);

                update():any;
            }

            // todo report about types missed in docs
            export class ActualStateManager extends data.Manager{
                get<T>(path:"isInited", defaultValue?:T):T|boolean;
                get<T>(path:"infoLayerShown", defaultValue?:T):T|boolean;
                get<T>(path:"timestamp", defaultValue?:T):T|number;
                get<T>(path:"localtime", defaultValue?:T):T|string;
                get<T>(path:"level", defaultValue?:T):T|number;
                get<T>(path:"isotime", defaultValue?:T):T|string;
            }

            export class ActualOptions {
                autoUpdate:boolean = true;

                // imported from ymaps.LayerOptions
                trafficImageBrightness:number            = 0.5;
                trafficImageNotFoundTile:string          = null;
                trafficImagePane:string|interfaces.IPane = "ground"; // todo report about string type missed
                trafficImageProjection:any; // todo IProjection?
                trafficImageTileSize:number[]       = [256, 256];
                trafficImageTileTransparent:boolean = false;
                trafficImageZIndex:number /* = constants.zIndex.layer */;

                // imported from ymaps.hotspot.LayerOptions
                trafficJamCursor:string = "pointer";
                trafficJamDontChangeCursor:boolean = false;
                trafficJamHasBalloon:boolean = true;
                trafficJamHasHint:boolean = true;
                trafficJamInteractivityModel:string = "default#layer"; // todo determine
                trafficJamOpenBalloonOnClick:boolean = true;
                trafficJamOpenEmptyBalloon:boolean = false; // todo report about error in type declaration
                trafficJamOpenEmptyHint:boolean = false;  // todo report about error in type declaration
                trafficJamOpenHintOnHover:boolean = true;
                trafficJamPane:string|interfaces.IEventPane = "events"; // todo report about string type missed
                trafficJamZIndex:number;

                // imported from ymaps.hotspot.LayerOptions
                // todo check this options carefully
                trafficInfoCursor:string = "pointer";
                trafficInfoDontChangeCursor:boolean = false;
                trafficInfoHasBalloon:boolean = true;
                trafficInfoHasHint:boolean = true;
                trafficInfoInteractivityModel:string = "default#layer"; // todo determine
                trafficInfoOpenBalloonOnClick:boolean = true;
                trafficInfoOpenEmptyBalloon:boolean = false; // todo report about error in type declaration
                trafficInfoOpenEmptyHint:boolean = false;  // todo report about error in type declaration
                trafficInfoOpenHintOnHover:boolean = true;
                trafficInfoPane:string|interfaces.IEventPane = "events"; // todo report about string type missed
                trafficInfoZIndex:number;
            }

            export class ActualState{
                infoLayerShown:boolean = false;
            }
        }
    }
}