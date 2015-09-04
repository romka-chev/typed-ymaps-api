module ymaps {
    export module geometry {
        export module json {
            export class rectangle extends interfaces.IGeometryJson {
                coordinates:number[][];
                type:"Rectangle";
            }
        }
    }
}