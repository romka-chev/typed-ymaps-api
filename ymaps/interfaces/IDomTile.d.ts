namespace ymaps.interfaces {

    interface IDomTileStatic{
        new(url:string):IDomTile;
    }
    interface IDomTile {
        event:IEventManager;

        destroy():any;
        isReady():boolean;
        renderAt(context:HTMLElement, clientBounds:number[][], animate:boolean):any;
    }
}