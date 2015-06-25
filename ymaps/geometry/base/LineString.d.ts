module ymaps {
    export module geometry {
        export module base {
            export class LineString extends interfaces.IBaseLineStringGeometry  {
                events:event.Manager;

                constructor(coordinates?:number[][]);
            }
        }
    }
}