module ymaps {
    export module interfaces {
        export class ISuggestProvider {
            suggest(request:string, options:{
                boundedBy:number[][];
                results:number;
            }):vow.Promise;// todo export class
        }
    }
}