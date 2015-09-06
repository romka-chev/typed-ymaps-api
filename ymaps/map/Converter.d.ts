namespace ymaps.map {

    interface ConverterStatic {
        new(map:Map):Converter;
    }
    interface Converter {
        globalToPage(globalPixelPoint:number[]):number[];
        pageToGlobal(globalPixelPoint:number[]):number[];
    }

    declare var Converter:ConverterStatic;
}