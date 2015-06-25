module ymaps {
    export module geometry {
        export module pixel {
            export class MultiPolygon extends interfaces.IPixelMultiPolygonGeometry {
                constructor(coordinates:number[][][][], fillRule:"evenOdd"|"nonZero", metaData?:MultiPolygonMetaData);
            }

            export class MultiPolygonMetaData{
                convex:boolean = false;
            }
        }
    }
}