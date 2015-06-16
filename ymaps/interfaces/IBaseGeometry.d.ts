module ymaps {
    export module interfaces {
        export interface IBaseGeometry extends IEventEmitter {
            getBounds():number[][]|undefined; // todo null?
            getType():string;
        }
    }
}