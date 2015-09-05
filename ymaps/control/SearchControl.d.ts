namespace ymaps.control {

    interface SearchControlStatic {
        new(parameters:SearchControlParameters = defaultSearchControlParameters):SearchControl;
    }
    interface SearchControl extends Button {
        getResult(index:number):vow.Promise;
        getResultsArray():any[]; // todo determine return
        getResultsCount():number;
        getResponseMetaData():any; // todo determine return
        getSelectedIndex():number;
        search(request:string):vow.Promise;
        getRequestString():string;
        hideResult():any;
        showResult(index:number):SearchControl;
    }

    interface SearchControlParameters {
        data   ?:SearchControlParametersData;
        options?:SearchControlParametersOptions;
        state  ?:SearchControlParametersState;
    }
    interface SearchControlParametersData {
    }
    interface SearchControlParametersOptions {
        boundedBy         ?:number[][];
        float             ?:ymaps.Float;
        floatIndex        ?:number;
        formLayout        ?:string|interfaces.ILayout;
        kind              ?:ymaps.Kind;
        layout            ?:string|interfaces.ISearchControlLayout;
        maxWidth          ?:number|number[];
        noCentering       ?:boolean;
        noPlacemark       ?:boolean;
        noPopup           ?:boolean;
        noSelect          ?:boolean;
        noSuggestPanel    ?:boolean;
        placeholderContent?:string;
        popupItemLayout   ?:string|interfaces.ILayout;
        popupLayout       ?:string|interfaces.ILayout;
        position          ?:SearchControlParametersOptionsPosition;
        provider          ?:ymaps.Provider|interfaces.IGeocodeProvider;
        searchCoordOrder  ?:string;
        size              ?:ymaps.Size;
        strictBounds      ?:boolean;
        useMapBounds      ?:boolean;
        zoomMargin        ?:number|number[];
    }
    interface SearchControlParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface SearchControlParametersState {
    }

    declare var SearchControl:SearchControlStatic;
    declare var defaultSearchControlParameters:SearchControlParameters = {
        options: {
            float           : "right",
            floatIndex      : 200,
            formLayout      : "islands#searchControlFormLayout",
            kind            : "house",
            layout          : "islands#searchControlLayout",
            maxWidth        : [30, 72, 290],
            noCentering     : false,
            noPlacemark     : false,
            noPopup         : false,
            noSelect        : false,
            noSuggestPanel  : false,
            popupItemLayout : "islands#searchControlPopupItemLayout",
            popupLayout     : "islands#searchControlPopupLayout",
            position        : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            },
            provider        : "yandex#map",
            searchCoordOrder: "latlong",
            size            : "auto",
            zoomMargin      : 0,
        },
    }
}