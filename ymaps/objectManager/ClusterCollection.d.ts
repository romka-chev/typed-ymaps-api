namespace ymaps.objectManager {

    interface ClusterCollection extends interfaces.ICustomizable, interfaces.IEventEmitter {
        // todo determine collection item as Cluster?
        balloon:objectManager.Balloon;
        options:ClusterCollectionOptionsManager;
        overlays:objectManager.OverlayCollection;
        state:data.Manager; // todo what about activeObject?

        // todo report about context is not required
        each(callback:Function, context?:any);
        getAll():any[]; // todo determine; Cluster[]?
        getById(id:string):any; // todo determine; Cluster[]?
        getIterator():interfaces.IIterator;
        getLength():number;
        getObjectManager():ObjectManager;
        // todo determine options. ClusterOptions?
        // todo check return type carefully - it seems to be ClusterCollection
        setClusterOptions(objectId:string, options:any):objectManager.ObjectCollection;
    }

    interface ClusterCollectionOptionsManager extends option.Manager {
        get(path:"hasBalloon",           defaultValue?:boolean ):boolean;
        get(path:"hasHint",              defaultValue?:boolean ):boolean;
        get(path:"hideIconOnBalloonOpen",defaultValue?:boolean ):boolean;
        get(path:"openBalloonOnClick",   defaultValue?:boolean ):boolean;
        get(path:"openHintOnHover",      defaultValue?:boolean ):boolean;
    }
}