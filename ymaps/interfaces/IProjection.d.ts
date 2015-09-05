namespace ymaps.interfaces {

    interface IProjection {
        getCoordSystem():ICoordSystem;
        isCycled():boolean[];
        fromGlobalPixels(globalPixelPoint:number[], zoom:number):number[];
        toGlobalPixels(coordPoint:number[], zoom:number):number[];
    }
}