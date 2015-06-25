module ymaps {
    export module geometry {
        export class Circle extends interfaces.ICircleGeometry {
            constructor(coordinates:number[] = null, radius:number = 0, options?:CircleOptions);
        }

        export class CircleOptions {
            geodesic:boolean                = false;
            pixelRendering:"jumpy"|"static" = "jumpy";
            projection:interfaces.IProjection;
        }
    }
}