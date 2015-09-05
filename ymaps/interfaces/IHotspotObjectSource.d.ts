namespace ymaps.interfaces {
    interface IHotspotObjectSource extends ICustomizable {
        cancelLastRequest():any;
        requestObjects(layer:hotspot.Layer, tileNumber:number[], zoom:number, callback:Function):any;
    }
}