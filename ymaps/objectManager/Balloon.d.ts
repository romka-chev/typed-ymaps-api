module ymaps {
    export module objectManager {
        class Balloon extends interfaces.IBalloonManager {

            constructor(collection:interfaces.IReadOnlyCollection); // todo report about interface missing

            close(force:boolean = false):vow.Promise; // todo generics
            getData():any; // todo null; todo determine

            isOpen(id:any):boolean; // todo determine; todo report about incompatibility?

            // todo generics
            // todo determine arguments
            // todo report about anchorPixelPosition type missed
            open(objectId:any, anchorPixelPosition:any):vow.Promise;

            // todo generics
            // todo check for ObjectManagerFeature and ObjectManagerFeatureCollection and string?
            // todo why there is only {Object} type w/o {string}?
            setData(objectData:any):vow.Promise;
        }
    }
}