module ymaps {
    export module geometry {
        export module pixel {
            export class Rectangle extends interfaces.IPixelRectangleGeometry {
                constructor(coordinates:number[][] = null, metaData?:any);
            }
        }
    }
}