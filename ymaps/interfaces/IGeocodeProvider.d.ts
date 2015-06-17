module ymaps {
    export module interfaces {
        declare class IGeocodeProvider {
            geocode(request:string, options?:{
                boundedBy:number[][];
                results:number;
                skip:number;
                strictBounds:boolean;
            }):vow.Promise; // todo extract class
            suggest(request:string, options?:{
                boundedBy:number[][];
                results:number;
                strictBounds:boolean;
            }):vow.Promise; // todo extract class
        }
    }
}