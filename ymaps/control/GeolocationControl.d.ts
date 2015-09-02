module ymaps {
    export module control {
        export class GeolocationControl extends Button {

            state:GeolocationControlStateManager;

            constructor(parameters?:GeolocationParameters){
                super(<any>parameters);
            }
        }
        export class GeolocationParameters{
            data    :GeolocationParametersData;
            options :GeolocationParametersOptions;
            /**
             * todo @report about mistake in official docs ?
             * There is no default states described in the docs
             */
            state   :GeolocationParametersState;
        }
        export class GeolocationParametersData{
            image:string = 'geolocation';
            title:string;
        }
        export class GeolocationParametersOptions{
            float       :"left"|"right"|"none"  = "right";
            floatIndex  :number                 = 300;
            maxWidth    :number|number[]        = 28;
            visible     :boolean                = true;
            noPlacemark :boolean                = false;
            position    :GeolocationParametersOptionsPosition;
        }
        export class GeolocationParametersOptionsPosition{
            bottom  :number|string = "auto";
            left    :number|string = "auto";
            top     :number|string = "auto";
            right   :number|string = "auto";
        }
        export class GeolocationParametersState{}

        class GeolocationControlStateManager extends data.Manager{
        }
    }
}