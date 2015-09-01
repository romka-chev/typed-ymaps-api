module ymaps {
    export module shape {
        export class MultiPolygon extends interfaces.IShape {

            constructor(pixelGeometry:interfaces.IPixelMultiPolygonGeometry, params?:MultiPolygonParameters);
        }

        export class MultiPolygonParameters{
            fill:boolean = true;
            outline:boolean = true;
            strokeWidth:number = 0;
        }
    }
}