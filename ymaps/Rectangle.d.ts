module ymaps {
    export class Rectangle extends GeoObject {

        editor = null;
        geometry:geometry.Rectangle;

        // todo determine Object type
        constructor(geometry:number[][]|Object|interfaces.IRectangleGeometry, properties?:interfaces.IDataManager|RectangleProperties, options?:RectangleOptions){
            super();
        }
    }

    // todo check types carefully
    export class RectangleProperties {
        hintContent:string;
        balloonContent:string;
        balloonContentHeader:string;
        balloonContentBody:string;
        balloonContentFooter:string;
    }

    export class RectangleOptions{

        cursor:string = "pointer";
        draggable:boolean = false;
        fill:boolean = true;
        fillColor:string = "0066ff99";
        fillImageHref:string;
        fillMethod:"stretch"|"tile" = "stretch"; // todo report about some beautifying in docs relative to Placemark
        fillOpacity:number = 1;
        hasBalloon:boolean = true;
        hasHint:boolean = true;
        interactiveZIndex:boolean = false;
        interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#geoObject";
        opacity:number = 1;
        openBalloonOnClick:boolean = true;
        openEmptyBalloon:boolean = false;
        openEmptyHint:boolean = false;
        openHintOnHover:boolean = true;
        outline:boolean = true;
        pane:string = "places"; // todo determine? check for IPane. report about IPane missed?
        rectangleOverlay:string|RectangleOptionsRectangleOverlay = "default#rectangle";
        strokeColor:string|string[] = "0066ffff";
        strokeOpacity:number|number[] = 1;
        strokeStyle:string|string[]|Object|Object[]; // todo dictionary with string values
        strokeWidth:number|number[] = 1;
        syncOverlayInit:boolean = false;
        visible:boolean = true;
        zIndex:number;
        zIndexActive:number;
        zIndexDrag:number;
        zIndexHover:number;


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

        // imported from ymaps.geometry.RectangleOptions
        // todo check this options carefully
        coordRendering:"shortestPath"|"straightPath"|"boundsPath";
        geodesic:boolean                = false;
        pixelRendering:"jumpy"|"static" = "jumpy";
        projection:interfaces.IProjection;
    }

    // todo generics?
    // todo determine arguments
    export interface RectangleOptionsRectangleOverlay{
        (geometry?:interfaces.IPixelRectangleGeometry, data?:interfaces.IDataManager|Object, options?:Object):vow.Promise;
    }
}