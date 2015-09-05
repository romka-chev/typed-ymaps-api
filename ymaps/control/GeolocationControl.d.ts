namespace ymaps.control {

    interface GeolocationControlStatic {
        new(parameters:GeolocationParameters = defaultGeolocationParameters):GeolocationControl;
    }
    interface GeolocationControl extends Button {
    }

    interface GeolocationParameters {
        data   ?:GeolocationParametersData;
        options?:GeolocationParametersOptions;
        state  ?:GeolocationParametersState;
    }
    interface GeolocationParametersData {
        image?:string;
        title?:string;
    }
    interface GeolocationParametersOptions {
        float      ?:ymaps.Float;
        floatIndex ?:number;
        maxWidth   ?:number|number[];
        visible    ?:boolean;
        noPlacemark?:boolean;
        position   ?:GeolocationParametersOptionsPosition;
    }
    interface GeolocationParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface GeolocationParametersState {
    }

    declare var GeolocationControl:GeolocationControlStatic;
    declare var defaultGeolocationParameters:GeolocationParameters = {
        data   : {
            image: 'geolocation'
        },
        options: {
            float      : "right",
            floatIndex : 300,
            maxWidth   : 28,
            visible    : true,
            noPlacemark: false,
            position   : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            }
        }
    }
}