module ymaps {
    export module interfaces {
        declare class ICollection extends IEventEmitter {
            add   (object:any):ICollection;
            remove(object:any):ICollection;

            getIterator():IIterator;
        }
    }
}