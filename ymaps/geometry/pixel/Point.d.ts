module ymaps {
    export module geometry {
        export module pixel {
            export class Point extends interfaces.IPixelPointGeometry {
                constructor(position:number[]|undefined, metaData?:any); // todo null
            }
        }
    }
}