module ymaps {
    export module behaviour {
        export class RightMouseButtonMagnifier extends interfaces.IBehavior {
            constructor(options?:RightMouseButtonMagnifierOptions){
                super(<any>options);
            }
        }
        export class RightMouseButtonMagnifierOptions {
            actionCursor:string = 'crosshair';
            duration:number     = 300;
        }
    }
}