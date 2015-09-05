namespace ymaps.interfaces {

    interface IPositioningContext {
        fromClientPixels(clientPixelPoint:number[]):number[];
        getZoom():number;
        toClientPixels(globalPixelPoint:number):number[];
    }
}