module ymaps {
    export module control {
        export class TypeSelector extends ListBox { // todo enum for mapType?

            data:data.Manager;

            constructor(parameters?:string[]|MapType[]|TypeSelectorParameters) {
                super(<any>parameters);
            }

            addMapType(mapType:"yandex#map",             positionIndex:number = 5 ):TypeSelector;
            addMapType(mapType:"yandex#satellite",       positionIndex:number = 10):TypeSelector;
            addMapType(mapType:"yandex#hybrid",          positionIndex:number = 15):TypeSelector;
            addMapType(mapType:"yandex#publicMap",       positionIndex:number = 20):TypeSelector;
            addMapType(mapType:"yandex#publicMapHybrid", positionIndex:number = 25):TypeSelector;
            addMapType(mapType:string|MapType,           positionIndex?:number    ):TypeSelector;

            getMap():Map;
            removeAllMapTypes():TypeSelector;
            removeMapType(mapType:string|MapType):TypeSelector; // todo enum?
        }
        export class TypeSelectorParameters {
            mapTypes:string[]|MapType[]; // todo enum?
            options:TypeSelectorParametersOptions;
            state:TypeSelectorParametersState;
        }
        export class TypeSelectorParametersOptions {
            collapseOnBlur:boolean      = true;
            collapseTimeout:number      = 3000;
            float:"left"|"right"|"none" = "right";
            floatIndex:number           = 200;
            layout:string|Function;
            maxWidth:number|number[]    = [30, 65, 85];
            position:TypeSelectorParametersOptionsPosition;
            visible:boolean             = true;

        }
        export class TypeSelectorParametersOptionsPosition {
            bottom:number|string = "auto";
            left:number|string   = "auto";
            right:number|string  = "auto";
            top:number|string    = "auto";
        }
        export class TypeSelectorParametersState {
            extended:boolean = false;
        }

    }
}