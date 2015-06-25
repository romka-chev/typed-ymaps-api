module ymaps {
    export module geometry {
        export class Polygon extends interfaces.IPolygonGeometry {
            constructor(coordinates:number[][][] = [], fillRule:"evenOdd"|"nonZero" = "evenOdd",  options?:PolygonOptions);
        }

        export class PolygonOptions {
            coordRendering:"shortestPath"|"straightPath" = "shortestPath";
            geodesic:boolean                = false;
            pixelRendering:"jumpy"|"static" = "jumpy";
            projection:interfaces.IProjection;
            simplification:boolean          = true;
        }
    }
}