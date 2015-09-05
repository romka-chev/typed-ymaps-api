namespace ymaps.layer.tileContainer {

    interface CanvasContainerStatic {
        new(layer:interfaces.ILayer, options:CanvasContainerOptions = defaultCanvasContainerOptions):CanvasContainer
    }
    interface CanvasContainer extends interfaces.IChildOnMap {
        getMap():Map;
        getTile(tileNumber:number[], tileZoom:number, priority:number):interfaces.ICanvasTile;
    }

    interface CanvasContainerOptions {
        notFoundTile   ?:string;
        tileClass      ?:string|interfaces.ICanvasTile; // todo report about string type missed
        tileTransparent?:boolean;
    }

    declare var CanvasContainer:CanvasContainerStatic;
    declare var defaultCanvasContainerOptions:CanvasContainerOptions = {
        tileClass      : "default#canvas",
        tileTransparent: false
    }
}