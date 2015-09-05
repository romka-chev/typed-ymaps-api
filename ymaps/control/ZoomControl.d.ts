namespace ymaps.control {

    interface ZoomControlStatic {
        new(parameters:ZoomControlParameters = defaultZoomControlParameters):ZoomControl;
    }
    interface ZoomControl extends interfaces.IControl, interfaces.ICustomizable {
    }

    interface ZoomControlParameters {
        data   ?:ZoomControlParametersData;
        options?:ZoomControlParametersOptions;
        state  ?:ZoomControlParametersState;
    }
    interface ZoomControlParametersData {

    }
    interface ZoomControlParametersOptions {
        layout      ?:string|interfaces.IZoomControlLayout;
        position    ?:ZoomControlParametersOptionsPosition;
        size        ?:"small"|"large"|"auto";
        visible     ?:boolean;
        zoomDuration?:number;
        zoomStep    ?:number;
    }
    interface ZoomControlParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface ZoomControlParametersState {
    }

    declare var ZoomControl:ZoomControlStatic;
    declare var defaultZoomControlParameters:ZoomControlParameters = {
        options: {
            position    : {
                top   : 108,
                right : "auto",
                bottom: "auto",
                left  : 10,
            },
            size        : "auto",
            visible     : true,
            zoomDuration: 200,
            zoomStep    : 1,
        }
    };
}