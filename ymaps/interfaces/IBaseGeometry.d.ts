module ymaps {
    export module interfaces {
        declare class IBaseGeometry extends IEventEmitter {
            getBounds():number[][]|undefined; // todo null?
            getType():string;
        }
    }
}