module ymaps {
    export module interfaces {
        export class IPositioningContext {
            fromClientPixels(clientPixelPoint:number[]):number[];
            getZoom():number;
            toClientPixels(globalPixelPoint:number):number[];
        }
    }
}