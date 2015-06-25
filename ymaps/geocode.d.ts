module ymaps {
    export function geocode(request:string|number[], options?:GeocodeOptions):vow.Promise;

    export class GeocodeOptions {
        boundedBy:number[][];
        json:boolean                                        = false;
        kind:"house"|"street"|"metro"|"district"|"locality" = "house"; // todo enum?
        provider:"yandex#map"|"yandex#publicMap"|interfaces.IGeocodeProvider = "yandex#map"; // todo check string type?
        results:number = 10;
        searchCoordOrder:string; // todo "lat-long"|"long-lat"?
        skip:number          = 0;
        strictBounds:boolean = false;

    }
}