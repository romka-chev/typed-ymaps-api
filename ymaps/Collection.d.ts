module ymaps {
    export class Collection extends interfaces.ICollection, collection.Item {
        constructor(options?:any);

        add(child:collection.Item):Collection;
        remove(child:collection.Item):Collection;
        removeAll():Collection;

        each(callback:Function, context:any):Collection;
        filter(filterFunction:Function):any[]; // todo collection.Item[] ? todo notation for first fn argument?

        get(index:number):any; // // todo collection.Item ?
        getAll():any[]; // todo collection.Item[] ?

        getIterator():interfaces.IIterator;
        getLength():number;
        indexOf(childToFind:any):number; // todo collection.Item ?

    }
}