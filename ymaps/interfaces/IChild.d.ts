module ymaps {
    export module interfaces {
        export class IChild extends IEventEmitter {
            getParent():any;

            setParent(parent:any):void;
        }
    }
}