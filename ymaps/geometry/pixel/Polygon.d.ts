module ymaps {
    export module geometry {
        export module pixel {
            export class Polygon extends interfaces.IPixelPolygonGeometry {
                constructor(coordinates:number[][][], fillRule:"evenOdd"|"nonZero", metaData?:PolygonMetaData);
            }

            export class PolygonMetaData{
                convex:boolean = false;
            }
        }
    }
}