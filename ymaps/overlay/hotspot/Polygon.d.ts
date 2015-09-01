module ymaps {
    export module overlay {
        export module hotspot {
            export class Polygon extends overlay.hotspot.Base {
                constructor(geometry:interfaces.IPixelPolygonGeometry, data?:any, options?:any); // todo determine options?
            }
        }
    }
}