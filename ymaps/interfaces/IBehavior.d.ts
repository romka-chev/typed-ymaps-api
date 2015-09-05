namespace ymaps.interfaces {

    interface IBehaviorStatic{
        new(options?:any):IBehavior;
    }
    interface IBehavior extends IChildOnMap, ICustomizable {
        disable():any;
        enable():any;
        isEnabled():boolean;
    }
}