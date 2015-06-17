module ymaps {
    export module interfaces {
        declare class IProjection {
            getCoordSystem():ICoordSystem;
            isCycled():boolean[];
            fromGlobalPixels(globalPixelPoint:number[], zoom:number):number[];
            toGlobalPixels  (      coordPoint:number[], zoom:number):number[];
        }
    }
}