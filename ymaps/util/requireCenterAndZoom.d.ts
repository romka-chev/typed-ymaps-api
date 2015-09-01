module ymaps {
    export module util {
        // todo generics?
        export function requireCenterAndZoom(mapType:string|MapType, bounds:number[][], containerSize:number[], params?:RequireCenterAndZoomParams):vow.Promise;

        export class RequireCenterAndZoomParams {
            inscribe:boolean    = true;
            margin:number       = 0;
            preciseZoom:boolean = false;
        }
    }
}