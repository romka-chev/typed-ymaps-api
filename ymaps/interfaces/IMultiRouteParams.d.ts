module ymaps {
    export module interfaces {
        declare class IMultiRouteParams {
            avoidTrafficJams:boolean = false;
            boundedBy:number[][] = null;
            results:number = 3;
            routingMode:"auto"|"masstransit" = "auto";
            searchCoordOrder:"longlat"|"latlong";
            strictBounds:boolean = false;
            viaIndexes:number[] = [];
        }
    }
}