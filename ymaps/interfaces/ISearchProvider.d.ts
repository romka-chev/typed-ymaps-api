namespace ymaps.interfaces {

    interface ISearchProvider {
        search(request:string, options:ISearchProviderSearchOptions):vow.Promise;
        suggest(request:string, options:ISearchProviderSuggestOptions):vow.Promise;
    }

    interface ISearchProviderSearchOptions {
        boundedBy?:number[][];
        results?:number;
        skip?:number;
    }
    interface ISearchProviderSuggestOptions {
        boundedBy?:number[][];
        results?:number;
        strictBounds?:boolean;
    }
}