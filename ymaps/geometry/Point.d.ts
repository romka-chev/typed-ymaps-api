module ymaps {
    export module geometry {
        export class Point extends interfaces.IPointGeometry {
            constructor(position:number[] = null, options?:PointOptions);
        }

        export class PointOptions {
            pixelRendering:"jumpy"|"static" = "jumpy";
            projection:interfaces.IProjection;
        }
    }
}