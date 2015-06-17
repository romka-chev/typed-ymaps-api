module ymaps {
    export module behaviour {
        export class MultiTouch extends interfaces.IBehavior {
            constructor(options?:MultiTouchOptions);
        }
        export class MultiTouchOptions {
            tremor:number = 2;
        }
    }
}