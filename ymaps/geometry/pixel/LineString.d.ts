module ymaps {
    export module geometry {
        export module pixel {
            export class LineString extends interfaces.IPixelLineStringGeometry {
                constructor(coordinates:number[][], metaData?:any);
            }
        }
    }
}