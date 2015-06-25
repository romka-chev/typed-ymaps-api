module ymaps {
    export module geometry {
        export module json {
            export class rectangle extends interfaces.IGeometryJson {
                coordinates:number[][]|undefined; // todo null
                type:"Rectangle";
            }
        }
    }
}