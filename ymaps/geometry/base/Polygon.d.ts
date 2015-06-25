module ymaps {
    export module geometry {
        export module base {
            export class Polygon extends interfaces.IBasePolygonGeometry  {
                events:event.Manager;

                constructor(coordinates:number[][][] = [], fillRule:"evenOdd"|"nonZero" = "evenOdd");
            }
        }
    }
}