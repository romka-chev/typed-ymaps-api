module ymaps {
    export module layer {
        export module tile {
            export class DomTile extends interfaces.IDomTile {
                constructor(url:string, options?:DomTileOptions) {
                    super(<any>url);

                    void options;
                }
            }
        }

        export class DomTileOptions {
            notFoundTile:string = null;
            tileAnimationDuration:number;
        }
    }
}