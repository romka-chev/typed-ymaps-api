module ymaps {
    export module map {
        export module action {
            export class Continuous extends interfaces.IMapAction {
                isActive():boolean;
                tick(tick:ContinuousTick):Continuous;
            }

            export class ContinuousTick{
                duration:number = 0;
                globalPixelCenter:number[];
                pixelOffset:number[];
                timingFunction:string = "linear";
                zoom:number;
            }
        }
    }
}