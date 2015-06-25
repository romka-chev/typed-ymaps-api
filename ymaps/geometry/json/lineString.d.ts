module ymaps {
    export module geometry {
        export module json {
            export class lineString extends interfaces.IGeometryJson {
                coordinates:number[][];
                type:"LineString";
            }
        }
    }
}