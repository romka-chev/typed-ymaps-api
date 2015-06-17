module ymaps {
    export class ClusterPlacemark extends interfaces.IGeoObject, collection.Item {
        state:data.Manager;

        constructor(geometry:interfaces.IPointGeometry|number[]|any, properties:ClusterPlacemarkProperties, options?:ClusterPlacemarkOptions);

        getBounds():number[][]|undefined; // todo null?
        getGeoObjects():interfaces.IGeoObject[];
    }
    export class ClusterPlacemarkProperties extends interfaces.IDataManager {
        geoObjects:interfaces.IGeoObject[];
    }
    export class ClusterPlacemarkOptions {
        balloonContentLayout:string|Function      = 'cluster#balloonTwoColumns';
        balloonContentLayoutHeight:number;
        balloonContentLayoutWidth:number;
        balloonItemContentLayout:string|ClusterPlacemarkOptionsBalloonItemContentLayout;
        balloonPanelContentLayout:string|Function = null;

        balloonLeftColumnWidth:number       = 125;
        balloonLeftColumnWidth:boolean      = true;
        balloonPagerSize:number /* = 4 | 9 */;
        balloonPagerType:"numeric"|"marker" = "numeric";
        balloonPagerVisible:boolean         = true;
        balloonAccordionShowIcons:boolean   = true;

        cursor:string                      = 'pointer';
        disableClickZoom:boolean           = false;
        hideIconOnBalloonOpen:boolean      = true;
        iconColor:string;
        iconContentLayout:string| Function = 'cluster#iconContent';
        iconLayout:string|Function         = 'cluster#icon';
        icons:ClusterPlacemarkOptionsIcons[]; // todo interface?
        iconShape:interfaces.IGeometryJson = null;
        interactivityModel:string          = 'default#geoObject';
        numbers:number[]                   = [10, 100];
        openBalloonOnClick:boolean         = true;
        openEmptyHint:boolean              = false;
        openHintOnHover:boolean            = true;
        zIndexHover:number;
    }

    export class ClusterPlacemarkOptionsIcons {
        href:string;
        size:number[];
        offset:number[];
        shape:string|interfaces.IShape;
    }
    export class ClusterPlacemarkOptionsBalloonItemContentLayout extends interfaces.ILayout {
        ownerProperties:ClusterPlacemarkProperties;
        ownerOptions:ClusterPlacemarkOptions;
        ownerState:data.Manager;
    }

}