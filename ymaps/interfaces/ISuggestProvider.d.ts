module ymaps {
    export module interfaces {
        declare class ISuggestProvider {
            suggest(request:string, options:{
                boundedBy:number[][];
                results:number;
            }):vow.Promise;// todo declare class
        }
    }
}