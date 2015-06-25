module ymaps {
    export module behaviour {
        export class LeftMouseButtonMagnifier extends interfaces.IBehavior {
            constructor(options?:LeftMouseButtonMagnifierOptions){
                super(<any>options);
            }
        }
        export class LeftMouseButtonMagnifierOptions {
            actionCursor:string = 'crosshair';
            cursor:string       = 'zoom';
            duration:number     = 300;
        }
    }
}