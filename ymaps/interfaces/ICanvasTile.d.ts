module ymaps {
    export module interfaces {
        export interface ICanvasTile {
            events:IEventManager;

            new(url:string):ICanvasTile;

            destroy():void;
            isReady():boolean;
            renderAt(context:any, canvasSize:number[], bounds:number[][], animate?:boolean):void;
        }
    }
}