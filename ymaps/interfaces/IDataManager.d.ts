module ymaps {
    export module interfaces {
        export class IDataManager extends IEventEmitter {
            get(path:string, defaultValue:any):any; // todo generics? report about error in docs?
        }
    }
}