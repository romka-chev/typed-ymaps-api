module ymaps {
    export module layer {
        export module tile {
            export class CanvasTile extends interfaces.ICanvasTile {
                constructor(url:string, options?:CanvasTileOptions) {
                    super(<any>url);

                    void options;
                }
            }
        }

        export class CanvasTileOptions {
            notFoundTile:string = null;
            tileAnimationDuration:number;
        }
    }
}