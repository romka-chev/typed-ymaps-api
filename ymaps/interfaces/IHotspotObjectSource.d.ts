module ymaps {
    export module interfaces {
        export class IHotspotObjectSource extends ICustomizable {
            cancelLastRequest():void;

            requestObjects(layer:hotspot.Layer, tileNumber:number[], zoom:number, callback:Function):void;
        }
    }
}