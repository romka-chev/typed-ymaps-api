module ymaps {
    export module map {
        export module pane {
            export class Manager { // todo check is methods are really voids
                constructor(map:Map);

                append(key:string, pane:interfaces.IPane):void;
                destroy():void;
                get(key:string):interfaces.IPane|undefined; // todo null
                getLower():string;
                getUpper():string;
                insertBefore(key:string, pane:interfaces.IPane, referenceKey:string):void;
                remove(pane:interfaces.IPane):void;
            }
        }
    }
}