namespace ymaps.interfaces {
    export interface IBehavior extends IChildOnMap, ICustomizable {
        new(options?:any);

        disable():void;

        enable():void;

        isEnabled():boolean;
    }
}