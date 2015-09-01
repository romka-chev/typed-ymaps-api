module ymaps {
    export class Circle extends GeoObject {

        /**
         * @deprecated
         */
        editor:any = null;
        geometry:geometry.Circle;

        constructor(geometry:interfaces.ICircleGeometry|number[][]|any, properties?:interfaces.IDataManager|any, options?:CircleOptions){
            super();
        }
    }

    export class CircleOptions {
        circleOverlay:string          = "default#circle";
        cursor:string                 = "pointer";
        draggable:boolean             = false;
        fill:boolean                  = true;
        fillColor:string              = "0066ff99";
        fillImageHref:string;
        fillMethod:string             = 'stretch';
        fillOpacity:number            = 1;
        hasBalloon:boolean            = true;
        hasHint:boolean               = true;
        hideIconOnBalloonOpen:boolean = true;
        interactiveZIndex:boolean     = false;
        interactivityModel:string     = "default#geoObject"; // todo determine
        opacity:number                = 1;
        openBalloonOnClick:boolean    = true;
        openEmptyBalloon:boolean      = false;
        openEmptyHint:boolean         = false;
        openHintOnHover:boolean       = true;
        outline:boolean               = true;
        pane:string                   = "areas";
        strokeColor:string|string[]   = "0066ffff";
        strokeOpacity:number|number[] = 1;
        strokeStyle:string|string[]|any|any[];
        strokeWidth:number|number[]   = 1;
        syncOverlayInit:boolean       = false;
        visible:boolean               = true;
        zIndex:number;
        zIndexActive:number;
        zIndexDrag:number;
        zIndexHover:number;

    }
}