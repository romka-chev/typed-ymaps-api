module ymaps {
    export module behaviour {
        export class Drag extends interfaces.IBehavior {
            constructor(options?:DragOptions);
        }
        export class DragOptions {
            actionCursor:string    = 'grabbing';
            cursor:string          = 'grab';
            inertia:boolean        = true;
            inertiaDuration:number = 400;
            tremor:number          = 2;
        }
    }
}