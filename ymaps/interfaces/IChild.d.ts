module ymaps {
    export module interfaces {
        export interface IChild extends IEventEmitter {
            getParent():any;
            setParent(parent:any):void;
        }
    }
}