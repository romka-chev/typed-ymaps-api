module ymaps {
    export module interfaces {
        export class ISearchProvider {
            search(request:string, options:{
                boundedBy:number[][];
                results:number;
                skip:number;
            }):vow.Promise;// todo export class
            suggest(request:string, options:{
                boundedBy:number[][];
                results:number;
                strictBounds:boolean;
            }):vow.Promise;// todo export class
        }
    }
}