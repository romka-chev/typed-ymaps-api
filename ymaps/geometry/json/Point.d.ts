module ymaps {
    export module geometry {
        export module json {
            export class Point extends interfaces.IGeometryJson {
                coordinates:number[]; // todo report about doc missing
                type:"Point";
            }
        }
    }
}