namespace ymaps.interfaces {

    interface ISuggestProvider {
        suggest(request:string, options:ISuggestProviderSuggestOptions):vow.Promise;
    }

    interface ISuggestProviderSuggestOptions {
        boundedBy?:number[][];
        results?:number;
    }
}