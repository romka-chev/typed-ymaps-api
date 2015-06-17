module ymaps {
    export module interfaces {
        export class ICollection extends IEventEmitter {
            add(object:any):ICollection;

            remove(object:any):ICollection;

            getIterator():IIterator;
        }
    }
}