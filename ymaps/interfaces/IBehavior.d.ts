module ymaps {
    export module interfaces {
        export interface IBehavior extends IChildOnMap, ICustomizable {
            new(options?:any):IBehavior;

            disable():void;
            enable():void;

            isEnabled():boolean;
        }
    }
}