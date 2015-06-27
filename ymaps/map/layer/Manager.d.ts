module ymaps {
    export module map {
        export module layer {
            export class Manager extends interfaces.ILayer, interfaces.IMapObjectCollection {
                constructor(map:Map, options?:ManagerOptions);

                // todo check is really void
                // todo determine callback?
                each(callback:Function, context?:any):void;
            }

            export class ManagerOptions{
                trafficImageZIndex:number = 201;
                trafficInfoZIndex:number = 1;
                trafficJamZIndex:number = 0;
            }

        }
    }
}