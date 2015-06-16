module ymaps {
    export module interfaces {
        export interface IDataManager extends IEventEmitter {
            get(path:string, defaultValue:any):any;
        }
    }
}