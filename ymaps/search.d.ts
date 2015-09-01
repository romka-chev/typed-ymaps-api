module ymaps {
    export function search(request:string|number[], options?:SearchOptions):vow.Promise;

    export class SearchOptions {
        boundedBy:number[][];
        json:boolean = false;
        provider:interfaces.ISearchProvider|string = "yandex#search";
        results:number = 10;
        skip:number = 0;
    }
}