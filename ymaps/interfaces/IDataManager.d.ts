module ymaps {
    export module interfaces {
        declare class IDataManager extends IEventEmitter {
            get(path:string, defaultValue:any):any; // todo generics? report about error in docs?
        }
    }
}