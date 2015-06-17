module ymaps {
    export module behaviour {
        export class ScrollZoom extends interfaces.IBehavior {
            constructor(options?:ScrollZoomOptions);
        }
        export class ScrollZoomOptions {
            maximumDelta:number = 5;
            speed:number        = 5;
        }

    }
}