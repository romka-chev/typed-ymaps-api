module ymaps {
    export class GeoObject extends interfaces.IGeoObject {

        balloon:geoObject.Balloon;
        editor:interfaces.IGeometryEditor;
        events:event.Manager;
        geometry:interfaces.IGeometry|undefined; // todo null
        hint:geoObject.Hint;
        options:option.Manager;
        properties:data.Manager;
        state:GeoObjectStateManager;

        constructor(feature?:GeoObjectFeature, options?:GeoObjectOptions);
    }

    export class GeoObjectFeature {
        geometry  :interfaces.IGeometry|interfaces.IGeometryJson;
        properties:interfaces.IDataManager|GeoObjectFeatureProperties;
    }
    export class GeoObjectFeatureProperties { // todo check
        iconContent:string;
        hintContent:string;
        balloonContent:string;
        balloonContentHeader:string;
        balloonContentBody:string;
        balloonContentFooter:string;
    }

    export class GeoObjectOptions {
        circleOverlay:string|(geometry?:interfaces.IPixelGeometry, data?:any, options?:any) => vow.Promise = "default#circle"; // todo interfaces.IDataManager?
        cursor:string = "pointer";
        draggable:boolean = false;
        fill:boolean = true;
        fillColor:string = "0066ff99";
        fillImageHref:string;
        fillMethod:"tile"|"stretch" = "stretch";
        fillOpacity:number = 1;
        hasBalloon:boolean = true;
        hasHint:boolean = true;
        hideIconOnBalloonOpen:boolean = true;
        iconColor:string;
        iconContentLayout:string|Function; // todo check ILayout
        iconContentOffset:number[];
        iconContentPadding:number[];
        iconContentSize:number[];
        iconImageClipRect:number[][] /* = [[0,0], [{imageWidth}, {imageHeight}]]*/;
        iconImageHref:string;
        iconImageOffset:number[];
        iconImageShape:interfaces.IShape|undefined; // todo null;
        iconImageSize:number[];
        iconLayout:string|Function; // todo check ILayout
        iconMaxHeight:number;
        iconMaxWidth:number;
        iconOffset:number[] = [0, 0];
        iconShadow:boolean = false;
        iconShadowImageClipRect:number[][] /* = [[0,0], [{imageWidth}, {imageHeight}]]*/;
        iconShadowImageHref:string;
        iconShadowImageOffset:number[];
        iconShadowImageSize:number[];
        iconShadowLayout:string|Function; // todo check ILayout
        iconShadowOffset:number[];
        interactiveZIndex:boolean;
        interactivityModel:string = "default#geoObject"; // todo determine?
        lineStringOverlay:string|(geometry?:interfaces.IPixelLineStringGeometry, data?:interfaces.IDataManager|any, options?:any) => vow.Promise = "default#polyline";
        opacity:number = 1;
        openBalloonOnClick:boolean = true;
        openEmptyBalloon:boolean = false;
        openEmptyHint:boolean = false;
        openHintOnHover:boolean = true;
        outline:boolean = true;
        pane:string;
        pointOverlay:string|(geometry?:interfaces.IPixelPointGeometry, data?:interfaces.IDataManager|any, options?:any) => vow.Promise = "default#placemark";
        polygonOverlay:string|(geometry?:interfaces.IPixelPolygonGeometry, data?:interfaces.IDataManager|any, options?:any) => vow.Promise = "default#polygon";
        preset:string;
        rectangleOverlay:string|(geometry?:interfaces.IPixelRectangleGeometry, data?:interfaces.IDataManager|any, options?:any) => vow.Promise = "default#polygon";
        strokeColor:string|string[] = "0066ffff";
        strokeOpacity:number|number[] = 1;
        strokeStyle:string|string[]|any|any[];
        strokeWidth:number|number[] = 1;
        syncOverlayInit:boolean = false;
        visible:boolean = true;
        zIndex:number;
        zIndexActive:number;
        zIndexDrag:number;
        zIndexHover:number;
    }

    export class GeoObjectStateManager extends data.Manager { // todo set?
        get<T>(path:"active", defaultValue:T):T|boolean;
        get<T>(path:"hover",  defaultValue:T):T|boolean;
        get<T>(path:"drag",   defaultValue:T):T|boolean;

        // todo setters ?
    }
}