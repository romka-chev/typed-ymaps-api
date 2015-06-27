module ymaps {
    export module hotspot {
        export class ObjectSource extends interfaces.IHotspotObjectSource {

            constructor(tileUrlTemplate:string|Function, keyTemplate?:string|Function, options?:ObjectSource);

            getKey(tileNumber:number[], zoom:number):string;
            getKeyTemplate():string;
            getTileUrl(tileNumber:number[], zoom:number):string;
            getTileUrlTemplate():string;
            parseResponse(layer:hotspot.Layer, res:any, callback:Function, tileNumber:number[], zoom:number):void;
            restrict(layer:hotspot.Layer, tileNumber:number[], zoom:number):boolean;
            setKeyTemplate(template:string):void;
            setTileUrlTemplate(template:string):void;
        }

        export class ObjectSourceOptions {
            bounds:number[][] = null; // todo report about type error; check type carefully
            maxZoom:number = 0; // todo report about type error
            minZoom:number = 0; // todo report about type error
            noCache:boolean = false;
        }
    }
}