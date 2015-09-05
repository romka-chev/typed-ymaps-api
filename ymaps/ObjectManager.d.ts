module ymaps {
    export class ObjectManager extends interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IGeoObject, interfaces.IParentOnMap {

        clusters:objectManager.ClusterCollection;
        objects:objectManager.ObjectCollection;

        constructor(options?:ObjectManagerOptions);

        add(objects:ObjectManagerFeatureCollection|ObjectManagerFeature):ObjectManager;
        add(objects:ObjectManagerFeatureCollection[]|ObjectManagerFeature[]):ObjectManager;
        add(objects:string):ObjectManager;

        getBounds():number[][];
        getFilter():string|Function; // todo report about wrong declaration description
        getObjectState(id:any):ObjectManagerObjectState;
        getPixelBounds():number[][];

        remove(objects:ObjectManagerFeatureCollection|ObjectManagerFeature):ObjectManager;
        remove(objects:ObjectManagerFeatureCollection[]|ObjectManagerFeature[]):ObjectManager;
        remove(objects:string):ObjectManager;

        removeAll():ObjectManager;
        setFilter(filterFunction:ObjectManagerFilterFunction|string):any; // todo check for FluidInterface

    }

    export class ObjectManagerOptions {

        clusterize:boolean;
        syncOverlayInit:boolean;
        viewportMargin:number|number[] = 128;

        // todo report about docs error? what mean clusterHasBalloon option? it should be in clusterer
        // todo and it should be not allowed

        // from ymaps.ClustererOptions
        gridSize:number            = 64;
        groupByCoordinates:boolean = false;
        margin:number | number[]   = 10;
        maxZoom:number[]|number    = Infinity; // todo check type declaration
        minClusterSize:number            = 2;
        preset:string;
        showInAlphabeticalOrder:boolean  = false;
        viewportMargin:number | number[] = 128;
        zoomMargin:number | number[]     = 0;


        // from ymaps.ClusterPlacemarkOptions
        clusterBalloonContentLayout:string|Function      = 'cluster#balloonTwoColumns';
        clusterBalloonContentLayoutHeight:number;
        clusterBalloonContentLayoutWidth:number;
        clusterBalloonItemContentLayout:string|ClusterPlacemarkOptionsBalloonItemContentLayout;
        clusterBalloonPanelContentLayout:string|Function = null;

        clusterBalloonLeftColumnWidth:number       = 125;
        clusterBalloonLeftColumnWidth:boolean      = true;
        clusterBalloonPagerSize:number /* = 4 | 9 */;
        clusterBalloonPagerType:"numeric"|"marker" = "numeric";
        clusterBalloonPagerVisible:boolean         = true;
        clusterBalloonAccordionShowIcons:boolean   = true;

        clusterCursor:string                      = 'pointer';
        clusterDisableClickZoom:boolean           = false;
        clusterHideIconOnBalloonOpen:boolean      = true;
        clusterIconColor:string;
        clusterIconContentLayout:string| Function = 'cluster#iconContent';
        clusterIconLayout:string|Function         = 'cluster#icon';
        clusterIcons:ClusterPlacemarkOptionsIcons[];
        clusterIconShape:interfaces.IGeometryJson = null;
        clusterInteractivityModel:string          = 'default#geoObject'; // todo determine
        clusterNumbers:number[]                   = [10, 100];
        clusterOpenBalloonOnClick:boolean         = true;
        clusterOpenEmptyHint:boolean              = false;
        clusterOpenHintOnHover:boolean            = true;
        clusterZIndexHover:number;

        //todo import ymaps.PlacemarkOptions
    }

    export interface ObjectManagerFeatureCollection {
        type:"FeatureCollection";
        features:ObjectManagerFeatureCollection[]|ObjectManagerFeature[]; // todo check declaration carefully
    }
    export interface ObjectManagerFeature {
        id:any;
        type:"Feature";
        geometry:interfaces.IGeometry|interfaces.IGeometryJson;
        options:any; // todo dictionary
        properties:any; // todo dictionary
    }

    export interface ObjectManagerObjectState{
        found:boolean;
        isShown:boolean;
        cluster:any; // todo check is this string? or JSON object?
        isClustered:boolean;
        isFilteredOut:boolean;
    }

    export interface ObjectManagerFilterFunction extends Function{
        (object?:ObjectManagerFilterFunctionObject):any; // todo check is there strict-type check for return value
    }
    export interface ObjectManagerFilterFunctionObject{
        options:any;
        properties:any;
        geometry:any;
        id:any;
    }
}