module ymaps {
    export class MapEvent extends Event {
        constructor(originalEvent:any, sourceEvent?:interfaces.IEvent){
            super(<any>originalEvent, <any>sourceEvent);
        }

        get(name:"coords"):number[];
        get(name:"globalPixels"):number[];
        get(name:"pagePixels"):number[];
        get(name:"position"):number[];
        get(name:"clientPixels"):number[];
        get(name:"domEvent"):DomEvent|undefined; // todo null
    }
}