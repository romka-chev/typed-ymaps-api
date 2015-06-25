module ymaps {
    export module geometry {
        export module base {
            export class Circle extends interfaces.IBaseCircleGeometry {
                events:event.Manager;

                constructor(coordinates:number[] = null, radius:number = 0);
            }
        }
    }
}