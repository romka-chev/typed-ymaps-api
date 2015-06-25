module ymaps {
    export module geometry {
        export module base {
            export class Point extends interfaces.IBasePointGeometry {
                events:event.Manager;

                constructor(coordinates:number[] = null);
            }
        }
    }
}