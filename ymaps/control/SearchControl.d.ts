module ymaps {
    export module control {
        export class SearchControl extends Button {

            state:SearchControlDataManager;

            constructor(parameters?:SearchControlParameters) {
                super(<any>parameters);
            }

            getMap():Map;
            getRequestString():string;
            getResponseMetaData():any; // todo determine return
            getResult(index:number):vow.Promise;
            getResultsArray():any[]; // todo determine return
            getResultsCount():number;
            getSelectedIndex():number;
            hideResult():void;
            search(request:string):vow.Promise;
            showResult(index:number):SearchControl;

        }
        export class SearchControlParameters {
            data:SearchControlParametersData;
            options:SearchControlParametersOptions;
            state:SearchControlParametersState;
        }
        export class SearchControlParametersData {

        }
        export class SearchControlParametersOptions {
            boundedBy:number[][];
            float:"left"|"right"|"none"                                                          = "right";
            floatIndex:number                                                                    = 200;
            formLayout:string|interfaces.ILayout                                                 = "islands#searchControlFormLayout";
            kind:"house"|"street"|"metro"|"district"|"locality"                                  = "house";
            layout:string|interfaces.ISearchControlLayout                                        = "islands#searchControlLayout";
            maxWidth:number|number[]                                                             = [30, 72, 290];
            noCentering:boolean                                                                  = false;
            noPlacemark:boolean                                                                  = false;
            noPopup:boolean                                                                      = false;
            noSelect:boolean                                                                     = false;
            noSuggestPanel:boolean                                                               = false;
            placeholderContent:string;
            popupItemLayout:string|interfaces.ILayout                                            = "islands#searchControlPopupItemLayout";
            popupLayout:string|interfaces.ILayout                                                = "islands#searchControlPopupLayout";
            position:SearchControlParametersOptionsPosition;
            provider:"yandex#map"|"yandex#publicMap"|"yandex#search"|interfaces.IGeocodeProvider = "yandex#map";
            searchCoordOrder:string                                                              = "latlong";
            size:"small"|"medium"|"large"|"auto"                                                 = "auto";
            strictBounds:boolean;
            useMapBounds:boolean;
            zoomMargin:number|number[]                                                           = 0;
        }
        export class SearchControlParametersOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = "auto";
            right:number|string  = "auto";
            top:number|string    = "auto";
        }
        export class SearchControlParametersState {

        }

        export class SearchControlDataManager extends data.Manager{
            get<T>(path:"size",           defaultValue?:T):T|number[];
            get<T>(path:"results",        defaultValue?:T):T|string[]; // todo determine return
            get<T>(path:"currentIndex",   defaultValue?:T):T|number; // todo determine return
            get<T>(path:"found",          defaultValue?:T):T|number;
            get<T>(path:"request",        defaultValue?:T):T|string;
            get<T>(path:"correction",     defaultValue?:T):T|string;
            get<T>(path:"noSuggestPanel", defaultValue?:T):T|boolean;
        }
    }
}