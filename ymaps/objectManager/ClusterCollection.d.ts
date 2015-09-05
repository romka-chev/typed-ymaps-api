module ymaps {
    export module objectManager {
        class ClusterCollection extends interfaces.ICustomizable, interfaces.IEventEmitter {

            // todo determine collection item aka Cluster?

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

        export class ClusterCollectionOptionsManager extends option.Manager {
            hasBalloon:boolean;
            hasHint:boolean;
            hideIconOnBalloonOpen:boolean;
            openBalloonOnClick:boolean;
            openHintOnHover:boolean;
        }
    }
}