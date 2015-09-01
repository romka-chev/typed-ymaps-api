module ymaps {
    export module util {
        export class Dragger extends interfaces.IEventEmitter {

            constructor(params?:DraggerParams);

            destroy():any;
            isDragging():boolean;
            start(event:interfaces.IDomEvent):any;
            stop():any;
        }

        export class DraggerParams{
            autoStartElement:HTMLElement|interfaces.IDomEventEmitter;
            byRightButton:boolean = false;
            tremor:number = 3;
        }
    }
}