module ymaps {
    export module map {
        export class Container extends interfaces.IDomEventEmitter {
            constructor(parentElement:string|HTMLElement);

            enterFullscreen():void;
            exitFullscreen():void;
            fitToViewport(preservePixelPosition?:boolean):void;
            getElement():HTMLElement;
            getOffset():number[];
            getSize():number[];
            isFullscreen():boolean;
        }
    }
}