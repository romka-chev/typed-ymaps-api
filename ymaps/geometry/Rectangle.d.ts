module ymaps {
    export module geometry {
        export class Rectangle extends interfaces.IRectangleGeometry {
            constructor(coordinates:number[][] = null, options?:RectangleOptions);

            getDistance(from:number = 0, to?:number):number;
        }

        export class RectangleOptions {
            coordRendering:"shortestPath"|"straightPath"|"boundsPath";
            geodesic:boolean                = false;
            pixelRendering:"jumpy"|"static" = "jumpy";
            projection:interfaces.IProjection;
        }
    }
}