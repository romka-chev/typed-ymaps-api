module ymaps {
    export module interfaces {
        declare class IBehavior extends IChildOnMap, ICustomizable {
            constructor(options?:any);

            disable():void;
            enable():void;

            isEnabled():boolean;
        }
    }
}