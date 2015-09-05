namespace ymaps.geometry.base {

    interface LineStringStatic {
        new(coordinates?:number[][]):LineString;
    }
    interface LineString extends interfaces.IBaseLineStringGeometry {
        events:event.Manager;
    }

    declare var LineString:LineStringStatic;
}