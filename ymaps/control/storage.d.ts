module ymaps {
    export module control {
        export class storage implements util.Storage {
            static add(key:string, object:any):Storage;

            static get(key:"rulerControl"):control.RulerControl;
            static get(key:"searchControl"):control.SearchControl;
            static get(key:"trafficControl"):control.TrafficControl;
            static get(key:"typeSelector"):control.TypeSelector;
            static get(key:"zoomControl"):control.ZoomControl;
            static get(key:"geolocationControl"):control.GeolocationControl;
            static get(key:"routeEditor"):control.RouteEditor;
            static get(key:"fullscreenControl"):control.FullscreenControl;

            static get(key:string):any;

            static remove(key:string):Storage;
        }
    }
}