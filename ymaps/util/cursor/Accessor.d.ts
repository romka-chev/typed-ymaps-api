module ymaps {
    export module util {
        export module cursor {
            export class Accessor {

                constructor(key:string);
                getKey():string;
                remove():any;

                // todo report about docs wrong
                setKey(key:string):any;
            }
        }
    }
}