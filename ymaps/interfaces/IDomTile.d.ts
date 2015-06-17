module ymaps {
    export module interfaces {
        declare class IDomTile {
            event:IEventManager;

            constructor(url:string);

            destroy():void;
            isReady():boolean;
            renderAt(context:HTMLElement, clientBounds:number[][], animate:boolean):void;
        }
    }
}