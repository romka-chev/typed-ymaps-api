module ymaps {
    export module map {
        export class Converter {
            constructor(map:Map);

            globalToPage(globalPixelPoint:number[]):number[];
            pageToGlobal(globalPixelPoint:number[]):number[];
        }
    }
}