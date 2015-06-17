module ymaps {
    export module behaviour {
        export class DblClickZoom extends interfaces.IBehavior {
            constructor(options?:DblClickZoomOptions);
        }
        export class DblClickZoomOptions {
            centering:boolean = true;
            duration:number   = 200;
        }
    }
}