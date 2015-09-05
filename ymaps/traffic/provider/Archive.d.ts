module ymaps {
    export module traffic {
        export module provider {
            export class Archive extends interfaces.ITrafficProvider {

                state:ArchiveStateManager;

                constructor(options?:ArchiveOptions, state?:ArchiveState);

                getTime():ArchiveTime;
                setTime(time:ArchiveTime, callback?:(hash?:ArchiveTime) => any):any;

            }

            export class ArchiveTime {
                dayOfWeek:"mon"|"tue"|"wed"|"thu"|"fri"|"sat"|"sun";
                hours:number;
                minutes:number;
            }

            // todo report about types missed in docs
            export class ArchiveStateManager extends data.Manager {
                get<T>(path:"isInited", defaultValue?:T):T|boolean;
                get<T>(path:"timeZone", defaultValue?:T):T|number;
                get<T>(path:"dst", defaultValue?:T):T|any; // todo determine
                get<T>(path:"timestamp", defaultValue?:T):T|number;
                get<T>(path:"localtime", defaultValue?:T):T|any; // todo determine
                get<T>(path:"level", defaultValue?:T):T|string;
            }

            export class ArchiveOptions {
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

            export class ArchiveState {
                timestamp:number;
            }
        }
    }
}