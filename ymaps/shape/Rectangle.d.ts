module ymaps {
    export module shape {
        export class Rectangle extends interfaces.IShape {

            constructor(pixelGeometry:interfaces.IPixelRectangleGeometry, params?:RectangleParameters);
        }

        export class RectangleParameters{
            fill:boolean = true;
            outline:boolean = true;
            strokeWidth:number = 0;
        }
    }
}