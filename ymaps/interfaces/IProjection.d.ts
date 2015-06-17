module ymaps {
    export module interfaces {
        export class IProjection {
            getCoordSystem():ICoordSystem;
            isCycled():boolean[];
            fromGlobalPixels(globalPixelPoint:number[], zoom:number):number[];
            toGlobalPixels  (      coordPoint:number[], zoom:number):number[];
        }
    }
}