namespace ymaps.domEvent {

    interface TouchStatic {
        new(originalEvent:any, type?:string):Touch;
    }
    interface Touch extends interfaces.IMultiTouchEvent {
        get(name:string):any;
    }

    declare var Touch:TouchStatic;
}