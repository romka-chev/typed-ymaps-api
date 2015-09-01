module ymaps {
    export module overlay {
        export module hotspot {
            export class Polyline extends overlay.hotspot.Base {
                constructor(geometry:interfaces.IPixelRectangleGeometry, data?:any, options?:any); // todo determine options?
            }
        }
    }
}