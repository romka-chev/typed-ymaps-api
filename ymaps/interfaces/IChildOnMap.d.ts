module ymaps {
    export module interfaces {
        declare class IChildOnMap extends IChild {
            getParent():IControlParent|undefined; //todo null?
            setParent(parent:any):IChildOnMap;
        }
    }
}