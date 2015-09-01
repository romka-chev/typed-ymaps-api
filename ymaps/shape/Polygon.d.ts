module ymaps {
    export module shape {
        export class Polygon extends interfaces.IShape {

            constructor(pixelGeometry:interfaces.IPixelPolygonGeometry, params?:PolygonParameters);
        }

        export class PolygonParameters{
            fill:boolean = true;
            outline:boolean = true;
            strokeWidth:number = 0;
        }
    }
}