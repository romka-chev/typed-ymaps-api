module ymaps {
    export module behaviour {
        export class RightMouseButtonMagnifier extends interfaces.IBehavior {
            constructor(options?:RightMouseButtonMagnifierOptions);
        }
        export class RightMouseButtonMagnifierOptions {
            actionCursor:string = 'crosshair';
            duration:number     = 300;
        }
    }
}