module ymaps {
    export module overlay {
        export module hotspot {
            export class Circle extends overlay.hotspot.Base {
                constructor(geometry:interfaces.IPixelCircleGeometry, data?:any, options?:any); // todo determine options?
            }
        }
    }
}