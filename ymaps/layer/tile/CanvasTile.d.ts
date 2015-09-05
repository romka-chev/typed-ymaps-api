namespace ymaps.layer.tile {

    interface CanvasTileStatic extends ymaps.interfaces.ICanvasTileStatic{
        new(url:string, options?:CanvasTileOptions):CanvasTile;
    }
    interface CanvasTile extends interfaces.ICanvasTile {
    }

    interface CanvasTileOptions {
        notFoundTile?:string;
        tileAnimationDuration?:number;
    }

    declare var CanvasTile:CanvasTileStatic;
}