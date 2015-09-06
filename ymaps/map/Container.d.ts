namespace ymaps.map {

    interface ContainerStatic {
        new(parentElement:string|HTMLElement):Container;
    }
    interface Container extends interfaces.IDomEventEmitter {
        enterFullscreen():any;
        exitFullscreen():any;
        fitToViewport(preservePixelPosition?:boolean):any;
        getElement():HTMLElement;
        getOffset():number[];
        getSize():number[];
        isFullscreen():boolean;
    }

    declare var Container:ContainerStatic;
}