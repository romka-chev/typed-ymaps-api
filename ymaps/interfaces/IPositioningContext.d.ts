module ymaps {
    export module interfaces {
        declare class IPositioningContext {
            fromClientPixels(clientPixelPoint:number[]):number[];
            getZoom():number;
            toClientPixels(globalPixelPoint:number):number[];
        }
    }
}