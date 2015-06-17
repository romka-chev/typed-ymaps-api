module ymaps {
    export module interfaces {
        declare class ICanvasTile {
            events:IEventManager;

            constructor(url:string);

            destroy():void;
            isReady():boolean;
            renderAt(context:any, canvasSize:number[], bounds:number[][], animate?:boolean):void;
        }
    }
}