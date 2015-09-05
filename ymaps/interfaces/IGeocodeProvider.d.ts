namespace ymaps.interfaces {

    interface IGeocodeProvider {
        geocode(request:string, options?:IGeocodeProviderGeocodeOptions):vow.Promise;
        suggest(request:string, options?:IGeocodeProviderSuggestOptions):vow.Promise;
    }

    interface IGeocodeProviderGeocodeOptions {
        boundedBy?:number[][];
        results?:number;
        skip?:number;
        strictBounds?:boolean;
    }
    interface IGeocodeProviderSuggestOptions {
        boundedBy?:number[][];
        results?:number;
        strictBounds?:boolean;
    }
}