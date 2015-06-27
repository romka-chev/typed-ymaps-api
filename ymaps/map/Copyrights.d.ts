module ymaps {
    export module map {
        export class Copyrights {

            events:event.Manager;

            constructor(map:Map);

            add(customCopyrights:string|string[]|HTMLElement|HTMLElement[]):interfaces.ICopyrightsAccessor;
            addProvider(provider:interfaces.ICopyrightsProvider):Copyrights;
            get(point:number[], zoom:number):vow.Promise; // todo generics
            removeProvider(provider:interfaces.ICopyrightsProvider):Copyrights;
        }
    }
}