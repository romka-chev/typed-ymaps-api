module ymaps {
    export module domEvent {
        export class Touch extends interfaces.IMultiTouchEvent {
            constructor(originalEvent:any, type?:string);

            get(name:string):any;
        }
    }
}