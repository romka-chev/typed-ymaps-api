namespace ymaps.layer.tile {

    interface DomTileStatic extends ymaps.interfaces.IDomTileStatic{
        new(url:string, options?:DomTileOptions):DomTile
    }
    interface DomTile extends interfaces.IDomTile {
    }

    interface DomTileOptions {
        notFoundTile?:string;
        tileAnimationDuration?:number;
    }

    declare var DomTile:DomTileStatic;
}