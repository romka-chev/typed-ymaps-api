namespace ymaps.interfaces {

    interface ILayoutStatic{
        new (data:any):ILayout;
    }
    interface ILayout extends IDomEventEmitter {
        destroy():any;
        isEmpty():boolean;
        getShape():IShape;
        getData():any;
        setData(data:any):any;
        getParentElement():HTMLElement;
        setParentElement(parent:HTMLElement):any;
    }
}