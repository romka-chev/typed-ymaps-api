module ymaps {
    export module regions {
        export function load(region:string, options?:LoadOptions):vow.Promise;

        export class LoadOptions {
            disputedBorders:string;
            lang:string;
            quality:number = 1;
        }
    }
}