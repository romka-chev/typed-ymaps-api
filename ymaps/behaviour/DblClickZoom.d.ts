module ymaps {
    export module behaviour {
        declare class DblClickZoom extends interfaces.IBehavior {
            constructor(options?:DblClickZoomOptions);
        }
        export class DblClickZoomOptions {
            centering:boolean = true;
            duration:number = 200;
        }
    }
}