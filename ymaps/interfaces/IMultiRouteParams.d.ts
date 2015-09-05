namespace ymaps.interfaces {

    interface IMultiRouteParams {
        aanyTrafficJams?:boolean;
        boundedBy       ?:number[][];
        results         ?:number;
        routingMode     ?:"auto"|"masstransit";
        searchCoordOrder?:"longlat"|"latlong";
        strictBounds    ?:boolean;
        viaIndexes      ?:number[];
    }

    // todo bad logic
    declare var defaultIMultiRouteParams:IMultiRouteParams = {
        aanyTrafficJams: false,
        boundedBy       : null,
        results         : 3,
        routingMode     : "auto",
        strictBounds    : false,
        viaIndexes      : []
    }
}