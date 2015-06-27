module ymaps {
    export class Map extends interfaces.IDomEventEmitter {

        action:map.action.Manager;
        balloon:map.Balloon;
        behaviors:map.behavior.Manager;
        container:map.Container;
        controls:control.Manager;
        converter:map.Converter;
        copyrights:map.Copyrights;
        cursors:util.cursor.Manager;
        events:event.Manager;
        geoObjects:map.GeoObjects;
        hint:map.Hint;
        layers:map.layer.Manager;
        options:option.Manager;
        panes:map.pane.Manager;
        zoomRange:map.ZoomRange;

        constructor(element:string|any, state:MapState, options?:MapOptions);

        destroy():void;
        getBounds(options?:any):number[][]; // todo determine?
        getCenter(options?:any):number[];  // todo determine?
        getGlobalPixelCenter(options?:any):number[];  // todo determine?
        getType():string|MapType;
        getZoom():number;
        panTo(center:number[], options?:MapPanToOptions):vow.Promise;
        setBounds(bounds:number[][], options?:MapSetBoundsOptions):vow.Promise;
        setCenter(center:number[], zoom?:number, options?:MapSetCenterOptions):vow.Promise;
        setGlobalPixelCenter(globalPixelCenter:number[], zoom?:number, options?:MapSetGlobalPixelCenterOptions):vow.Promise;
        setType(type:"yandex#map"|"yandex#satellite"|"yandex#hybrid"|"yandex#publicMap"|"yandex#publicMapHybrid"|string|MapType, options?:MapSetTypeOptions):vow.Promise;
        setZoom(zoom:number, options?:MapSetZoomOptions):vow.Promise; // todo return errors?
    }
    export class MapState{
        behaviors:string[] = ["default"];
        bounds:number[][];
        center:number[];
        controls:string[] = ["default"];
        type:"yandex#map"|"yandex#satellite"|"yandex#hybrid"|"yandex#publicMap"|"yandex#publicMapHybrid"|string|MapType = "yandex#map";
        zoom:number;
    }
    export class MapOptions{
        autoFitToViewport:"none"|"ifNull"|"always" = "ifNull";
        avoidFractionalZoom:boolean = true;
        exitFullscreenByEsc:boolean = true;
        fullscreenZIndex:number = 10000;
        mapAutoFocus:boolean = true;
        maxAnimationZoomDifference:number = 5;
        maxZoom:number = 23;
        minZoom:number = 0;
        projection:interfaces.IProjection = projection.wgs84Mercator;
        restrictMapArea:boolean|number[][] = false;
        suppressObsoleteBrowserNotifier:boolean = false;
        yandexMapAutoSwitch:boolean = true;
    }
    export class MapPanToOptions{
        checkZoomRange:boolean = false;
        delay:number = 1000;
        duration:number = 500;
        flying:boolean = true;
        safe:boolean = true;
        timingFunction:string = "ease-in-out";
    }
    export class MapSetBoundsOptions{
        checkZoomRange:boolean = false;
        duration:number = 0;
        preciseZoom:boolean = false;
        timingFunction:string = "linear";
        zoomMargin:number|number[] = 0;
    }
    export class MapSetCenterOptions{
        checkZoomRange:boolean = false;
        duration:number = 0;
        timingFunction:string = "linear";
    }
    export class MapSetGlobalPixelCenterOptions{
        checkZoomRange:boolean = false;
        duration:number = 0;
        timingFunction:string = "linear";
    }
    export class MapSetTypeOptions{
        checkZoomRange:boolean = false;
    }
    export class MapSetZoomOptions{
        checkZoomRange:boolean = false;
        duration:number = 0;
    }
}