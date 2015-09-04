module ymaps {
    export module interfaces {
        export class IChildOnMap extends IChild {
            getParent():IControlParent;
            setParent(parent:any):IChildOnMap;
        }
    }
}