module ymaps {
    export module geometry {
        export module base {
            export class Rectangle extends interfaces.IBaseRectangleGeometry  {
                events:event.Manager;

                constructor(coordinates:number[][] = null);
            }
        }
    }
}