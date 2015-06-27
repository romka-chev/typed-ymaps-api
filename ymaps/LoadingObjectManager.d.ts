module ymaps {
    export class LoadingObjectManager extends interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IGeoObject, interfaces.IParentOnMap {

        clusters:objectManager.ClusterCollection;
        objects:objectManager.ObjectCollection;

        constructor(urlTemplate:string, options?:LoadingObjectManagerOptions);

        getBounds():number[][]|undefined; // todo null;
        getObjectState(id:any):LoadingObjectManagerObjectState; // todo check is it really any?
        getPixelBounds():number[][]|undefined; // todo null;
        getUrlTemplate():string;
        reloadData():void;
        setUrlTemplate(urlTemplate:string):void;
    }
    export class LoadingObjectManagerOptions{
        clusterize:boolean = false;
        paddingParamName:boolean|string = 'callback'; // todo report about string type missed
        paddingTemplate:string = null;
        splitRequests:boolean = false;
        syncOverlayInit:boolean = false;
        viewportMargin:number|number[] = 128;
    }

    export class LoadingObjectManagerObjectState{
        found:boolean;
        isShown:boolean;
        cluster:any; // todo determine
        isClustered:boolean;
        isFilteredOut:boolean;
    }
}