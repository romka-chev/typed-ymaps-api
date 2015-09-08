namespace ymaps.interfaces {

    interface IMultiRouteParams {
        avoidTrafficJams?:boolean;
        boundedBy       ?:number[][];
        results         ?:number;
        routingMode     ?:"auto"|"masstransit";
        searchCoordOrder?:"longlat"|"latlong";
        strictBounds    ?:boolean;
        viaIndexes      ?:number[];
    }
}