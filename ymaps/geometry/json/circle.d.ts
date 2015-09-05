namespace ymaps.geometry.json {

    interface circle extends interfaces.IGeometryJson {
        coordinates:number[];
        radius:number;
        type:"Circle";
    }
}