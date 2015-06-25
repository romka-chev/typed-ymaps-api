module ymaps {
    export class geolocation {
        static get(options?:GeolocationGetOptions):vow.Promise;
    }

    export class GeolocationGetOptions { // todo report about types missing?
        autoReverseGeocode:boolean = true;
        mapStateAutoApply:boolean  = false;
        provider:string            = "auto"; // todo determine string type? ('yandex' for sure)
        timeout:number = 30000;
    }
}