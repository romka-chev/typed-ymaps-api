namespace ymaps.geometry.json {

    interface polygon extends interfaces.IGeometryJson {
        coordinates:number[][][];
        fillRule:ymaps.FillRules;
        type:"Polygon";
    }
}