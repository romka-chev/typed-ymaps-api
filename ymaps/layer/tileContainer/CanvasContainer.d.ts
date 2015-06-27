module ymaps {
    export module layer {
        export module tile {
            export class CanvasContainer extends interfaces.IChildOnMap {
                constructor(layer:interfaces.ILayer, options?:CanvasContainerOptions);

                getMap():Map;
                getTile(tileNumber:number[], tileZoom:number, priority:number):interfaces.ICanvasTile;
            }

            export class CanvasContainerOptions {
                notFoundTile:string = null;
                tileClass:string|interfaces.ICanvasTile = "default#canvas"; // todo report about string type missed
                tileTransparent:boolean = false;
            }
        }
    }
}