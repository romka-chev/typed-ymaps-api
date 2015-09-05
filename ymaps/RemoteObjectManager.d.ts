module ymaps {
    export class RemoteObjectManager extends interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IGeoObject, interfaces.IParentOnMap{

        clusters:objectManager.ClusterCollection;
        objects:objectManager.ObjectCollection;

        constructor(urlTemplate:string, options?:RemoteObjectManagerOptions);

        getBounds():number[][];
        getObjectState(id:any):RemoteObjectManagerObjectState; // todo check is it really any?
        getPixelBounds():number[][];
        getUrlTemplate():string;
        reloadData():any;
        setFilter(filterFunction:RemoteObjectManagerFilterFunction|string):any;
        setUrlTemplate(urlTemplate:string):any;
    }
    export class RemoteObjectManagerOptions{
        // todo import other options
        clusterize:boolean = false;
        paddingParamName:boolean|string = 'callback'; // todo report about string type missed
        paddingTemplate:string = null;
        splitRequests:boolean = false;
        syncOverlayInit:boolean = false;
        viewportMargin:number|number[] = 128;

        // imported from ymaps.ClustererOptions
        gridSize:number                  = 64;
        groupByCoordinates:boolean       = false;
        margin:number | number[]         = 10;
        maxZoom:number[]|number          = Infinity; // todo check type declaration
        minClusterSize:number            = 2;
        preset:string;
        showInAlphabeticalOrder:boolean  = false;
        viewportMargin:number | number[] = 128;
        zoomMargin:number | number[]     = 0;

        // imported from ymaps.ClusterPlacemarkOptions
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


        // todo check if i can specify ALL these options from here
        // imported from ymaps.PlacemarkOptions
        geoObjectCursor:string = "pointer";
        geoObjectDraggable:boolean = false;
        geoObjectHasBalloon:boolean = true;
        geoObjectHasHint:boolean = true;
        geoObjectHideIconOnBalloonOpen:boolean = true;
        geoObjectIconOffset:number[]; // todo check for just {number}
        geoObjectIconShape:interfaces.IGeometryJson = null;
        geoObjectInteractiveZIndex:boolean = true;
        geoObjectInteractivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#geoObject";
        geoObjectOpenBalloonOnClick:boolean = true;
        geoObjectOpenEmptyBalloon:boolean = false;
        geoObjectOpenEmptyHint:boolean = false;
        geoObjectOpenHintOnHover:boolean = true;
        geoObjectPane:string = "places"; // todo determine? check for IPane. report about IPane missed?
        geoObjectPointOverlay:string|PlacemarkOptionsPointOverlay = "default#placemark";
        geoObjectSyncOverlayInit:boolean = false;
        geoObjectVisible:boolean = true;
        geoObjectZIndex:number;
        geoObjectZIndexActive:number;
        geoObjectZIndexDrag:number;
        geoObjectZIndexHover:number;

        geoObjectPreset:string; // todo determine all possible values?

        geoObjectIconColor:string;
        geoObjectIconLayout:string|interfaces.ILayout; // todo determine string values?

        // imported from ymaps.layout.ImageDataOptions
        geoObjectIconImageClipRect:number[][];
        geoObjectIconImageHref:string;
        geoObjectIconImageOffset:number[];
        geoObjectIconImageSize:number[];
        geoObjectIconShape:interfaces.IShape|any; //todo determine

        // imported from ymaps.layout.ImageWithContentDataOptions
        geoObjectIconContentLayout:string|Function; // todo ILayout constructor?
        geoObjectIconContentOffset:number[];
        geoObjectIconContentSize:number[];

        geoObjectIconShadowColor:string;
        geoObjectIconShadowLayout:string|interfaces.ILayout; // todo determine string values?

        // imported from ymaps.layout.ImageDataOptions
        geoObjectIconShadowImageClipRect:number[][];
        geoObjectIconShadowImageHref:string;
        geoObjectIconShadowImageOffset:number[];
        geoObjectIconShadowImageSize:number[];
        geoObjectIconShadowShape:interfaces.IShape|any;

        // imported from ymaps.layout.ImageWithContentDataOptions
        geoObjectIconShadowContentLayout:string|Function; // todo ILayout constructor?
        geoObjectIconShadowContentOffset:number[];
        geoObjectIconShadowContentSize:number[];

        // imported from ymaps.BalloonOptions
        geoObjectBalloonAutoPan:boolean                    = true;
        geoObjectBalloonAutoPanCheckZoomRange:boolean      = false;
        geoObjectBalloonAutoPanDuration:number             = 500;
        geoObjectBalloonAutoPanMargin:number|number[]      = 34;
        geoObjectBalloonCloseButton:boolean                = true;
        geoObjectBalloonContentLayout:string|Function;
        geoObjectBalloonLayout:string|Function             = "islands#balloon";
        geoObjectBalloonMaxHeight:number;
        geoObjectBalloonMaxWidth:number;
        geoObjectBalloonMinHeight:number;
        geoObjectBalloonMinWidth:number;
        geoObjectBalloonOffset:number[];
        geoObjectBalloonPane:string                        = "balloon";
        geoObjectBalloonPanelContentLayout:string|Function = null;
        geoObjectBalloonPanelMaxHeightRatio:number;
        geoObjectBalloonPanelMaxMapArea:number;
        geoObjectBalloonShadow:boolean                     = true;
        geoObjectBalloonShadowLayout:string|Function;
        geoObjectBalloonShadowOffset:number[];

        // imported from ymaps.HintOptions
        geoObjectHintContentLayout:string|Function; // todo ILayout constructor?
        geoObjectHintFitPane:boolean        = true;
        geoObjectHintHoldByMouse:boolean    = true;
        geoObjectHintLayout:string|Function = "islands#hint";  // todo ILayout constructor?
        geoObjectHintOffset:number[]; // todo check for single-number version
        geoObjectHintPane:string = "outerHint"; // todo determine all keys?

        // imported from ymaps.geometryEditor.PointOptions
        geoObjectEditorDblClickHandler:Function;
        geoObjectEditorDrawingCursor:boolean|string = "arrow"; // todo report about type error?
        geoObjectEditorDrawOver:boolean = true;

        // imported from ymaps.geometry.PointOptions
        // todo check this options carefully
        geoObjectPixelRendering:"jumpy"|"static" = "jumpy";
        geoObjectProjection:interfaces.IProjection;

    }

    export class RemoteObjectManagerObjectState{
        found:boolean;
        isShown:boolean;
        isFilteredOut:boolean;
    }

    export interface RemoteObjectManagerFilterFunction extends Function{
        (object?:RemoteObjectManagerFilterFunctionObject):any; // todo check is there strict-type check for return value
    }
    export interface RemoteObjectManagerFilterFunctionObject{
        options:any;
        properties:any;
        geometry:any;
        id:any;
    }
}