namespace ymaps.map {

    interface CopyrightsStatic {
        new(map:Map):Copyrights;
    }
    interface Copyrights {
        events:event.Manager;

        add(customCopyrights:string|string[]|HTMLElement|HTMLElement[]):interfaces.ICopyrightsAccessor;
        addProvider(provider:interfaces.ICopyrightsProvider):Copyrights;
        get(point:number[], zoom:number):vow.Promise;
        removeProvider(provider:interfaces.ICopyrightsProvider):Copyrights;
    }

    declare var Copyrights:CopyrightsStatic;
}