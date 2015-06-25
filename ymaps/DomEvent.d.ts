module ymaps {
    export class DomEvent extends interfaces.IDomEvent {
        constructor(originalEvent:any, type?:any){ // todo originalEvent:DomEvent ?
            super(<any>originalEvent);
        }
    }
}