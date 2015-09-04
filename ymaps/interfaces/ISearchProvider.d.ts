module ymaps {
    export module interfaces {
        export class ISearchProvider {
            search(request:string, options:ISearchProviderSearchOptions):vow.Promise;
            suggest(request:string, options:ISearchProviderSuggestOptions):vow.Promise;
        }

        export interface ISearchProviderSearchOptions{
            boundedBy?:number[][];
            results?:number;
            skip?:number;
        }
        export interface ISearchProviderSuggestOptions{
            boundedBy?:number[][];
            results?:number;
            strictBounds?:boolean;
        }


    }
}