module ymaps {
    export class Popup extends interfaces.IPopup {
        constructor(map:Map, options?:PopupOptions);
    }

    export class PopupOptions{
        closeTimeout:number = 700;
        interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent";
        openTimeout:number = 150;
        pane:string|interfaces.IPane; // todo determine - map.pane.Manager
        projection:interfaces.IProjection;
        zIndex:string; // todo check for number type?
    }
}