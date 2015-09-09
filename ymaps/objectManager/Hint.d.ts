namespace ymaps.objectManager {

    interface HintStatic{
        new(collection:interfaces.IReadOnlyCollection):Hint; // todo report about interface missed
    }
    interface Hint extends interfaces.IHintManager {
        close(force:boolean = false):vow.Promise; // todo generics
        getData():any; // todo null; todo determine
        isOpen(id:any):boolean; // todo determine; todo report about incompatibility?
        // todo generics
        // todo determine objectId
        open(objectId:any, position?:number[]):vow.Promise;
        // todo generics
        // todo check for ObjectManagerFeature and ObjectManagerFeatureCollection and string?
        // todo why there is only {Object} type w/o {string}?
        setData(objectData:any):vow.Promise;
    }

    declare var Hint:HintStatic;
}