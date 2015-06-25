module ymaps {
    export module geometry {
        export module base {
            export class LinearRing extends interfaces.IBaseLinearRingGeometry {
                events:event.Manager;

                constructor(coordinates:number[] = null, radius:number = 0);
            }
        }
    }
}