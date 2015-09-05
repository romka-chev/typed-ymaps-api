namespace ymaps.domEvent {

    interface PointerStatic{
        new(originalEvent:any, type?:string):Pointer;
    }
    interface Pointer extends interfaces.IMultiTouchEvent {
        get(name:string):any;
    }

    declare var Pointer:PointerStatic;
}