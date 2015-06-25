module ymaps {
    export module domEvent {
        export class MultiPointer extends interfaces.IMultiTouchEvent{
            constructor(originalEvent:any, type?:string);

            get(name:string):any;
        }
    }
}