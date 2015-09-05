module ymaps {
    export class Layer extends interfaces.ILayer, interfaces.IParentOnMap, interfaces.IPositioningContext {
        constructor(tileUrlTemplate:string|Function, options?:LayerOptions);

        // todo check clientPixelPoint:number[]?
        clientPixelsToNumber(clientPixelPoint:number, tileZoom:number):number[];
        getPane():interfaces.IPane;
        getTileSize(zoom:number):number[];

        // todo report about types missed
        // todo check tileNumber:number[]?
        getTileUrl(tileNumber:number, tileZoom:number):string;
        getTileUrlTemplate():string|Function;
        numberToClientBounds(tileNumber:number[], tileZoom:number):number[][];
        restrict(number:number[], tileZoom:number):number[];
        setTileUrlTemplate(tileUrlTemplate:string|Function):void;

        // todo check updateBounds parameter
        // todo report about ambiguous description
        update():void;
    }

    export class LayerOptions {
        brightness:number            = 0.5;
        notFoundTile:string          = null;
        pane:string|interfaces.IPane = "ground"; // todo report about string type missed
        projection:any; // todo IProjection?
        tileSize:number[]       = [256, 256];
        tileTransparent:boolean = false;
        zIndex:number /* = constants.zIndex.layer */;
    }
}