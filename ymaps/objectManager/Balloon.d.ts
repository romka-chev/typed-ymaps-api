namespace ymaps.objectManager {

    interface BalloonStatic{
        new(collection:interfaces.IReadOnlyCollection):Balloon; // todo report about interface missing
    }
    interface Balloon extends interfaces.IBalloonManager {
        close(force:boolean = false):vow.Promise; // todo generics
        getData():any; // todo determine
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

    declare var Balloon:BalloonStatic;
}