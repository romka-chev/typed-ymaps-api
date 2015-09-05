namespace ymaps {
    type Dictionary<T> = {[key:string]:T};
    type Float = "left"|"right"|"none";
    type PopupFloat = "left"|"right";
    type Size = "auto"|"small"|"medium"|"large";
    enum Controls{
        FULLSCREEN_CONTROL     = "fullscreenControl",
        GEOLOCATION_CONTROL    = "geolocationControl",
        ROUTE_EDITOR           = "routeEditor",
        RULER_CONTROL          = "rulerControl",
        SEARCH_CONTROL         = "searchControl",
        TRAFFIC_CONTROL        = "trafficControl",
        TYPE_SELECTOR          = "typeSelector",
        ZOOM_CONTROL           = "zoomControl",
        SMALL_MAP_DEFAULT_SET  = "smallMapDefaultSet",
        MEDIUM_MAP_DEFAULT_SET = "mediumMapDefaultSet",
        LARGE_MAP_DEFAULT_SET  = "largeMapDefaultSet",
        DEFAULT                = "default"
    }
}