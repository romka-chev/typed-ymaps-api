module ymaps {
    export module hotspot {
        export module layer {
            export class Object extends interfaces.IHotspotLayerObject {

                // todo determine options?
                // todo check feature carefully
                constructor(shape:interfaces.IShape, feature:GeoObjectFeature, options?:any);

            }
        }
    }
}