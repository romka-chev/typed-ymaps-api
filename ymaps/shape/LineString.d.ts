module ymaps {
    export module shape {
        export class LineString extends interfaces.IShape {

            constructor(pixelGeometry:interfaces.IPixelLineStringGeometry, params?:LineStringParameters);
        }

        export class LineStringParameters{
            strokeWidth:number = 1;
        }
    }
}