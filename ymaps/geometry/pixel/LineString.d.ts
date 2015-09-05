namespace ymaps.geometry.pixel {

    interface LineStringStatic {
        new(coordinates:number[][], metaData?:any):LineString;
    }
    interface LineString extends interfaces.IPixelLineStringGeometry {
    }

    declare var LineString:LineStringStatic;
}