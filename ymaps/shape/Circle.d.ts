module ymaps {
    export module shape {
        export class Circle extends interfaces.IShape {

            constructor(pixelGeometry:interfaces.IPixelCircleGeometry, params?:CircleParameters);
        }

        export class CircleParameters{
            fill:boolean = true;
            outline:boolean = true;
            strokeWidth:number = 0;
        }
    }
}