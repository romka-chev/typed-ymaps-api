namespace ymaps.interfaces {

    interface ICollection extends IEventEmitter {
        add(object:any):ICollection;
        remove(object:any):ICollection;
        getIterator():IIterator;
    }
}