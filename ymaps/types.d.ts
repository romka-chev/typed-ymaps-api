namespace ymaps {
    type Dictionary<T> = {[key:string]:T};
    type Float = "left"|"right"|"none";
    type PopupFloat = "left"|"right";
    type Kind = "house"|"street"|"metro"|"district"|"locality";
    type Provider = "yandex#map"|"yandex#publicMap"|"yandex#search";
    type TrafficProvider = "traffic#actual"|"traffic#archive";
    type Size = "auto"|"small"|"medium"|"large";
    type MapTypes = "yandex#map"|"yandex#satellite"|"yandex#hybrid"|"yandex#publicMap"|"yandex#publicMapHybrid";
    type FillRules = "evenOdd"|"nonZero";
    type PixelRenderings = "jumpy"|"static";
    type CoordRenderings = "shortestPath"|"straightPath";
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