module ymaps {
    export module interfaces {
        export class IChildOnMap extends IChild {
            getParent():IControlParent|undefined; //todo null?
            setParent(parent:any):IChildOnMap;
        }
    }
}