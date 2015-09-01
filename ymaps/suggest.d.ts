module ymaps {
    // todo generics
    export function suggest(request:string, options?:SuggestOptions):vow.Promise;

    export class SuggestOptions {
        boundedBy:number[][];
        provider:interfaces.ISearchProvider|string = "yandex#search";
        results:number;
    }
}