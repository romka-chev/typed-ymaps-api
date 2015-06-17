module ymaps {
    export module interfaces {
        declare class ISearchProvider {
            search(request:string, options:{
                boundedBy:number[][];
                results:number;
                skip:number;
            }):vow.Promise;// todo declare class
            suggest(request:string, options:{
                boundedBy:number[][];
                results:number;
                strictBounds:boolean;
            }):vow.Promise;// todo declare class
        }
    }
}