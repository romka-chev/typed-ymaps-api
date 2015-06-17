module ymaps {
    export module interfaces {
        export class IBaseGeometry extends IEventEmitter {
            getBounds():number[][]|undefined; // todo null?
            getType():string;
        }
    }
}