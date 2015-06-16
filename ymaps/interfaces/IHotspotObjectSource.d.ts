module ymaps {
    export module interfaces {
        export interface IHotspotObjectSource extends ICustomizable{
            cancelLastRequest():void;
            requestObjects(layer:hotspot.Layer, tileNumber:number[], zoom:number, callback:Function):void;
        }
    }
}