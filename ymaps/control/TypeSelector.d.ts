namespace ymaps.control {

    interface TypeSelectorStatic {
        constructor(parameters:ymaps.MapTypes[]|MapType[]|TypeSelectorParameters = defaultTypeSelectorParameters):TypeSelector;
    }
    interface TypeSelector extends ListBox {
        addMapType(mapType:"yandex#map", positionIndex:number = 5):TypeSelector;
        addMapType(mapType:"yandex#satellite", positionIndex:number = 10):TypeSelector;
        addMapType(mapType:"yandex#hybrid", positionIndex:number = 15):TypeSelector;
        addMapType(mapType:"yandex#publicMap", positionIndex:number = 20):TypeSelector;
        addMapType(mapType:"yandex#publicMapHybrid", positionIndex:number = 25):TypeSelector;
        addMapType(mapType:ymaps.MapTypes|MapType, positionIndex?:number):TypeSelector;
        removeAllMapTypes():TypeSelector;
        removeMapType(mapType:ymaps.MapTypes|MapType):TypeSelector;
    }

    interface TypeSelectorParameters {
        mapTypes?:ymaps.MapTypes[]|MapType[];
        options ?:TypeSelectorParametersOptions;
        state   ?:TypeSelectorParametersState;
    }
    interface TypeSelectorParametersOptions {
        collapseOnBlur ?:boolean;
        collapseTimeout?:number;
        float          ?:ymaps.Float;
        floatIndex     ?:number;
        layout         ?:string|Function;
        maxWidth       ?:number|number[];
        position       ?:TypeSelectorParametersOptionsPosition;
        visible        ?:boolean;

    }
    interface TypeSelectorParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface TypeSelectorParametersState {
        extended?:boolean;
    }

    declare var TypeSelector:TypeSelectorStatic;
    declare var defaultTypeSelectorParameters:TypeSelectorParameters = {
        options: {
            collapseOnBlur : true,
            collapseTimeout: 3000,
            float          : "right",
            floatIndex     : 200,
            maxWidth       : [30, 65, 85],
            position       : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            },
            visible        : true,
        },
        state  : {
            extended: false
        }
    }
}