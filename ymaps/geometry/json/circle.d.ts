module ymaps {
    export module geometry {
        export module json {
            export class circle extends interfaces.IGeometryJson {
                coordinates:number[];
                radius:number;
                type:"Circle";
            }
        }
    }
}