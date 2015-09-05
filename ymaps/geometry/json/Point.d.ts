namespace ymaps.geometry.json {

    // todo why it starts from large letter?
    interface Point extends interfaces.IGeometryJson {
        coordinates:number[]; // todo report about doc missing
        type:"Point";
    }
}