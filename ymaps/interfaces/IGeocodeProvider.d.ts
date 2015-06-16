module ymaps {
    export module interfaces {
        export interface IGeocodeProvider {
            geocode(request:string, options?:{
                boundedBy:number[][];
                results:number;
                skip:number;
                strictBounds:boolean;
            }):vow.Promise; // todo extract interface
            suggest(request:string, options?:{
                boundedBy:number[][];
                results:number;
                strictBounds:boolean;
            }):vow.Promise; // todo extract interface
        }
    }
}