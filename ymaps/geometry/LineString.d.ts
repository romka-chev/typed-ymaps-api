module ymaps {
    export module geometry {
        export class LineString extends interfaces.ILineStringGeometry {
            constructor(coordinates:number[][] = [], options?:LineStringOptions);

            getDistance(from:number = 0, to?:number):number;
        }

        export class LineStringOptions {
            coordRendering:"shortestPath"|"straightPath";
            geodesic:boolean                = false;
            pixelRendering:"jumpy"|"static" = "jumpy";
            projection:interfaces.IProjection;
            simplification:boolean          = true;
        }
    }
}