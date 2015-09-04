module ymaps {
    export module interfaces {
        export class IGeocodeProvider {
            geocode(request:string, options?:IGeocodeProviderGeocodeOptions):vow.Promise;
            suggest(request:string, options?:IGeocodeProviderSuggestOptions):vow.Promise;
        }

        export interface IGeocodeProviderGeocodeOptions{
            boundedBy?:number[][];
            results?:number;
            skip?:number;
            strictBounds?:boolean;
        }
        export interface IGeocodeProviderSuggestOptions{
            boundedBy?:number[][];
            results?:number;
            strictBounds?:boolean;
        }

    }
}