module ymaps {
    export module interfaces {
        export class ISuggestProvider {
            suggest(request:string, options:ISuggestProviderSuggestOptions):vow.Promise;
        }

        export interface ISuggestProviderSuggestOptions{
            boundedBy?:number[][];
            results?:number;
        }
    }
}