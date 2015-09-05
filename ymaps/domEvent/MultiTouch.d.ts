namespace ymaps.domEvent {

    interface MultiTouchStatic{
        new(originalEvent:any, type?:string):MultiTouch;
    }
    interface MultiTouch extends interfaces.IMultiTouchEvent {
        get(name:string):any;
    }

    declare var MultiTouch:MultiTouchStatic;
}