namespace ymaps.interfaces {

    interface ICanvasTileStatic{
        new(url:string):ICanvasTile;
    }
    interface ICanvasTile {
        events:IEventManager;

        destroy():any;
        isReady():boolean;
        renderAt(context:any, canvasSize:number[], bounds:number[][], animate?:boolean):any;
    }
}