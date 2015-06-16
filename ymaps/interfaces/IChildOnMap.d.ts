module ymaps {
    export module interfaces {
        export interface IChildOnMap extends IChild {
            getParent():IControlPanel|undefined; //todo null?
            setParent(parent:any):IChildOnMap;
        }
    }
}