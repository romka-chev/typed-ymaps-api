module ymaps {
    export module traffic {
        export module provider {
            export class Forecast extends interfaces.ITrafficProvider {

                state:ForecastStateManager;

                constructor(options?:ForecastOptions, state?:ForecastState);

                getTime():ForecastTime;

            }

            export class ForecastTime {
                dayOfWeek:"mon"|"tue"|"wed"|"thu"|"fri"|"sat"|"sun";
                hours:number;
                minutes:number;
            }

            // todo report about types missed in docs
            export class ForecastStateManager extends data.Manager {
                get<T>(path:"isInited", defaultValue?:T):T|boolean;
                get<T>(path:"timestamp", defaultValue?:T):T|number;
                get<T>(path:"localtime", defaultValue?:T):T|string;
                get<T>(path:"level", defaultValue?:T):T|number;
                get<T>(path:"timeOffset", defaultValue?:T):T|number;
                get<T>(path:"isotime", defaultValue?:T):T|string;
            }

            export class ForecastOptions {
                showCurrentTimeFirst:boolean = true;

                // imported from ymaps.LayerOptions
                trafficImageBrightness:number            = 0.5;
                trafficImageNotFoundTile:string          = null;
                trafficImagePane:string|interfaces.IPane = "ground"; // todo report about string type missed
                trafficImageProjection:any; // todo IProjection?
                trafficImageTileSize:number[]       = [256, 256];
                trafficImageTileTransparent:boolean = false;
                trafficImageZIndex:number /* = constants.zIndex.layer */;

                // imported from ymaps.hotspot.LayerOptions
                trafficJamCursor:string             = "pointer";
                trafficJamDontChangeCursor:boolean  = false;
                trafficJamHasBalloon:boolean        = true;
                trafficJamHasHint:boolean           = true;
                trafficJamInteractivityModel:string = "default#layer"; // todo determine
                trafficJamOpenBalloonOnClick:boolean = true;
                trafficJamOpenEmptyBalloon:boolean   = false; // todo report about error in type declaration
                trafficJamOpenEmptyHint:boolean = false;  // todo report about error in type declaration
                trafficJamOpenHintOnHover:boolean           = true;
                trafficJamPane:string|interfaces.IEventPane = "events"; // todo report about string type missed
                trafficJamZIndex:number;

            }

            export class ForecastState {
                timeOffset:number = 900;
            }
        }
    }
}