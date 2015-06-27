module ymaps {
    export module map {
        export module action {
            export class Single extends interfaces.IMapAction {
                constructor(tick:SingleTick);

                isActive():boolean;
            }

            export class SingleTick {
                callback:Function;
                center:number;
                checkZoomRange:boolean = false;
                duration:number        = 0;
                globalPixelCenter:number[];
                timingFunction:string  = "linear";
                zoom:number;
            }
        }
    }
}