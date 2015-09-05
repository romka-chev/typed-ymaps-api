namespace ymaps.domEvent {

    interface MultiPointerStatic{
        new(originalEvent:any, type?:string):MultiPointer;
    }
    interface MultiPointer extends interfaces.IMultiTouchEvent {
        get(name:string):any;
    }

    declare var MultiPointer:MultiPointerStatic;
}