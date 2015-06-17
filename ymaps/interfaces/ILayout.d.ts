module ymaps {
    export module interfaces {
        export class ILayout extends IDomEventEmitter {

            constructor(data:any);

            destroy():void;

            isEmpty():boolean;

            getShape():IShape|undefined; // todo null?

            getData():any;

            setData(data:any):void;

            getParentElement():HTMLElement;

            setParentElement(parent:HTMLElement|undefined):void; // todo null?

        }
    }
}