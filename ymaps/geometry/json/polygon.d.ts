module ymaps {
    export module geometry {
        export module json {
            export class polygon extends interfaces.IGeometryJson {
                coordinates:number[][][];
                fillRule:"evenOdd"|"nonZero";
                type:"Polygon";
            }
        }
    }
}