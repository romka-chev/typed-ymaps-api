module ymaps {
    export class Placemark extends GeoObject {

        editor:geometryEditor.Point;
        geometry:geometry.Point;

        // todo determine Object type
        constructor(geometry:number[]|Object|interfaces.IPointGeometry, properties?:interfaces.IDataManager|PlacemarkProperties, options?:PlacemarkOptions){
            super();
        }
    }

    // todo check types carefully
    export class PlacemarkProperties {
        iconContent:string;
        hintContent:string;
        balloonContent:string;
        balloonContentHeader:string;
        balloonContentBody:string;
        balloonContentFooter:string;
    }

    export class PlacemarkOptions{

        cursor:string = "pointer";
        draggable:boolean = false;
        hasBalloon:boolean = true;
        hasHint:boolean = true;
        hideIconOnBalloonOpen:boolean = true;
        iconOffset:number[]; // todo check for just {number}
        iconShape:interfaces.IGeometryJson = null;
        interactiveZIndex:boolean = true;
        interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#geoObject";
        openBalloonOnClick:boolean = true;
        openEmptyBalloon:boolean = false;
        openEmptyHint:boolean = false;
        openHintOnHover:boolean = true;
        pane:string = "places"; // todo determine? check for IPane. report about IPane missed?
        pointOverlay:string|PlacemarkOptionsPointOverlay = "default#placemark";
        syncOverlayInit:boolean = false;
        visible:boolean = true;
        zIndex:number;
        zIndexActive:number;
        zIndexDrag:number;
        zIndexHover:number;

        preset:string; // todo determine all possible values?

        iconColor:string;
        iconLayout:string|interfaces.ILayout; // todo determine string values?

        // imported from ymaps.layout.ImageDataOptions
        iconImageClipRect:number[][];
        iconImageHref:string;
        iconImageOffset:number[];
        iconImageSize:number[];
        iconShape:interfaces.IShape|any;

        // imported from ymaps.layout.ImageWithContentDataOptions
        iconContentLayout:string|Function; // todo ILayout constructor?
        iconContentOffset:number[];
        iconContentSize:number[];

        iconShadowColor:string;
        iconShadowLayout:string|interfaces.ILayout; // todo determine string values?

        // imported from ymaps.layout.ImageDataOptions
        iconShadowImageClipRect:number[][];
        iconShadowImageHref:string;
        iconShadowImageOffset:number[];
        iconShadowImageSize:number[];
        iconShadowShape:interfaces.IShape|any;

        // imported from ymaps.layout.ImageWithContentDataOptions
        iconShadowContentLayout:string|Function; // todo ILayout constructor?
        iconShadowContentOffset:number[];
        iconShadowContentSize:number[];

        // imported from ymaps.BalloonOptions
        balloonAutoPan:boolean                    = true;
        balloonAutoPanCheckZoomRange:boolean      = false;
        balloonAutoPanDuration:number             = 500;
        balloonAutoPanMargin:number|number[]      = 34;
        balloonCloseButton:boolean                = true;
        balloonContentLayout:string|Function;
        balloonLayout:string|Function             = "islands#balloon";
        balloonMaxHeight:number;
        balloonMaxWidth:number;
        balloonMinHeight:number;
        balloonMinWidth:number;
        balloonOffset:number[];
        balloonPane:string                        = "balloon";
        balloonPanelContentLayout:string|Function = null;
        balloonPanelMaxHeightRatio:number;
        balloonPanelMaxMapArea:number;
        balloonShadow:boolean                     = true;
        balloonShadowLayout:string|Function;
        balloonShadowOffset:number[];

        // imported from ymaps.HintOptions
        hintContentLayout:string|Function; // todo ILayout constructor?
        hintFitPane:boolean        = true;
        hintHoldByMouse:boolean    = true;
        hintLayout:string|Function = "islands#hint";  // todo ILayout constructor?
        hintOffset:number[]; // todo check for single-number version
        hintPane:string = "outerHint"; // todo determine all keys?

        // imported from ymaps.geometryEditor.PointOptions
        editorDblClickHandler:Function;
        editorDrawingCursor:boolean|string = "arrow"; // todo report about type error?
        editorDrawOver:boolean = true;

        // imported from ymaps.geometry.PointOptions
        // todo check this options carefully
        pixelRendering:"jumpy"|"static" = "jumpy";
        projection:interfaces.IProjection;
    }

    // todo generics?
    // todo determine arguments
    export interface PlacemarkOptionsPointOverlay{
        (geometry?:interfaces.IPixelPointGeometry, data?:interfaces.IDataManager|Object, options?:Object):vow.Promise;
    }
}