namespace ymaps.hotspot.layer {

    interface ObjectStatic {
        // todo determine options?
        // todo check feature carefully
        new(shape:interfaces.IShape, feature:GeoObjectFeature, options?:any):Object;
    }
    interface Object extends interfaces.IHotspotLayerObject {

    }

    declare var Object:ObjectStatic;
}