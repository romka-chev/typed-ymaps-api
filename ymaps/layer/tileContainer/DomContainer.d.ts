module ymaps {
    export module layer {
        export module tile {
            export class DomContainer extends interfaces.IChildOnMap {
                constructor(layer:interfaces.ILayer, options?:DomContainerOptions);

                getMap():Map;
                getTile(tileNumber:number[], tileZoom:number, priority:number):interfaces.IDomTile;
            }

            export class DomContainerOptions {
                notFoundTile:string = null;
                tileClass:string|interfaces.IDomTile = "default#dom"; // todo report about string type missed
                tileTransparent:boolean = false;
            }
        }
    }
}