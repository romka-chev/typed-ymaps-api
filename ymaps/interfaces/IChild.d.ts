module ymaps {
    export module interfaces {
        declare class IChild extends IEventEmitter {
            getParent():any;
            setParent(parent:any):void;
        }
    }
}