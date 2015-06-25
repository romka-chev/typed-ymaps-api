module ymaps {
    export module behaviour {
        export class DblClickZoom extends interfaces.IBehavior {
            constructor(options?:DblClickZoomOptions){
                super(<any>options);
            }
        }
        export class DblClickZoomOptions {
            centering:boolean = true;
            duration:number   = 200;
        }
    }
}