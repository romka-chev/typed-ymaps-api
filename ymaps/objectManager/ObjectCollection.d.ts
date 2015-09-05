module ymaps {
    export module objectManager {
        class ObjectCollection extends interfaces.ICollection, interfaces.ICustomizable {

            balloon:objectManager.Balloon;
            hint:objectManager.Hint; // todo what does mean description?
            options:ObjectCollectionOptionsManager;
            overlays:objectManager.OverlayCollection;

            // todo check for compatibility
            add(objects:ObjectManagerFeatureCollection|ObjectManagerFeature):ObjectManager;
            add(objects:ObjectManagerFeatureCollection[]|ObjectManagerFeature[]):ObjectManager;
            add(objects:string):ObjectManager;

            // todo check for fluid interface
            // todo report about context argument not required
            // todo determine callback declaration
            each(callback:Function, context?:any):any;

            // todo determine; Cluster[]?
            getAll():any[];

            // todo determine; Cluster[]?
            getById(id:string):any;

            getLength():number;

            getObjectManager():ObjectManager;

            // todo check for compatibility
            // todo check wtf in function description doing `objectManager.objects.remove([34, 25]);`?
            remove(objects:ObjectManagerFeatureCollection|ObjectManagerFeature):ObjectManager;
            remove(objects:ObjectManagerFeatureCollection[]|ObjectManagerFeature[]):ObjectManager;
            remove(objects:string):ObjectManager;

            removeAll():ObjectCollection;

            // todo determine options. ClusterOptions?
            setObjectOptions(objectId:string, options:any):ObjectCollection;
        }

        export class ObjectCollectionOptionsManager extends option.Manager {
            hasBalloon:boolean;
            hasHint:boolean;
            hideIconOnBalloonOpen:boolean = true;
            openBalloonOnClick:boolean    = true;
        }
    }
}