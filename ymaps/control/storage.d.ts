namespace ymaps.control {

    interface Storage extends util.Storage {
        get(key:"rulerControl"):control.RulerControl;
        get(key:"searchControl"):control.SearchControl;
        get(key:"trafficControl"):control.TrafficControl;
        get(key:"typeSelector"):control.TypeSelector;
        get(key:"zoomControl"):control.ZoomControl;
        get(key:"geolocationControl"):control.GeolocationControl;
        get(key:"routeEditor"):control.RouteEditor;
        get(key:"fullscreenControl"):control.FullscreenControl;
    }

    declare var storage:Storage;
}