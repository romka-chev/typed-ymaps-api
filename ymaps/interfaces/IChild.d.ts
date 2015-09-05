namespace ymaps.interfaces {
    interface IChild extends IEventEmitter {
        getParent():any;

        setParent(parent:any):void;
    }
}