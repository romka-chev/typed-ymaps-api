module ymaps {
    export module overlay {
        export module hotspot {
            export class Placemark extends overlay.hotspot.Base {
                constructor(geometry:interfaces.IPixelPointGeometry, data?:any, options?:any); // todo determine options?
            }
        }
    }
}