module ymaps {
    export function route(points:Array<string|number[]|RoutePoint>, params?:RouteParameters):vow.Promise;

    export class RouteParameters {
        avoidTrafficJams:boolean         = false;
        boundedBy:number[][];
        mapStateAutoApply:boolean        = false;
        multiRoute:boolean               = false;
        routingMode:"auto"|"masstransit" = "auto";
        searchCoordOrder:string;
        strictBounds:boolean             = true;
        viaIndexes:number[]              = [];
    }

    export interface RoutePoint {
        type:"wayPoint"|"viaPoint";
        point:number[]|string;
    }
}