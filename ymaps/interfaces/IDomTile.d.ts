module ymaps {
    export module interfaces {
        export interface IDomTile {
            event:IEventManager;

            new(url:string):IDomTile;

            destroy():void;
            isReady():boolean;
            renderAt(context:HTMLElement, clientBounds:number[][], animate:boolean):void;
        }
    }
}