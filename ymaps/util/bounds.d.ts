module ymaps {
    export module util {
        export var bounds:Bounds;

        export class Bounds{
            areIntersecting(bounds1:number[][], bounds2:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):boolean;
            containsBounds(outer:number[][], inner:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):boolean;
            containsPoint(bounds:number[][], point:number[], projection:interfaces.IProjection = projection.wgs84Mercator):boolean;
            fromBounds(sourceBounds:number[][][], projection:interfaces.IProjection = projection.wgs84Mercator):number[][];
            fromGlobalPixelBounds(pixelBounds:number[][], zoom:number, projection:interfaces.IProjection = projection.wgs84Mercator):number[][];
            fromPoints(points:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):number[][];
            getCenter(bounds:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):number[];
            getCenterAndZoom(bounds:number[][], containerSize:number[], projection:interfaces.IProjection = projection.wgs84Mercator, params?:BoundsGetCenterAndZoomParams):CenterAndZoom;
            getIntersections(bounds1:number[][], bounds2:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):number[][][];
            getSize(bounds:number[][], projection:interfaces.IProjection = projection.wgs84Mercator):number[];

        }

        export class BoundsGetCenterAndZoomParams {
            inscribe:boolean = true;
            margin:number|number[] = 0;
            preciseZoom:boolean = false;
        }
        export class CenterAndZoom {
            center:number[];
            zoom:number;
        }

    }
}