module ymaps {
    export class Polygon extends GeoObject {

        editor:geometryEditor.Polygon;
        geometry:geometry.Polygon;

        // todo determine Object type
        constructor(geometry:number[][][]|Object|interfaces.IPolygonGeometry, properties?:interfaces.IDataManager|PolygonProperties, options?:PolygonOptions){
            super();
        }
    }

    // todo check types carefully
    export class PolygonProperties {
        hintContent:string;
        balloonContent:string;
        balloonContentHeader:string;
        balloonContentBody:string;
        balloonContentFooter:string;
    }

    export class PolygonOptions{

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
        pane:string = "areas"; // todo determine?
        polygonOverlay:string|PolygonOptionsPolygonOverlay = "default#polygon";
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

        // imported from ymaps.geometryEditor.PolygonOptions
        editorDblClickHandler:Function;
        editorDrawingCursor:boolean|string = "arrow"; // todo report about type error?
        editorDrawOver:boolean = true;
        editorEdgeLayout:Function;
        editorMaxPoints:number = Infinity;
        editorMenuManager:Function; // todo determine
        editorVertexLayout:Function;

        // imported from ymaps.geometry.PolygonOptions
        // todo check this options carefully
        coordRendering:"shortestPath"|"straightPath" = "shortestPath";
        geodesic:boolean                = false;
        pixelRendering:"jumpy"|"static" = "jumpy";
        projection:interfaces.IProjection;
        simplification:boolean          = true;
    }

    // todo generics?
    // todo determine arguments
    export interface PolygonOptionsPolygonOverlay{
        (geometry?:interfaces.IPixelPolygonGeometry, data?:interfaces.IDataManager|ObjectManager, options?:ObjectManager):vow.Promise;
    }
}