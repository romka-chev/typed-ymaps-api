namespace ymaps.interfaces {
    interface IChildOnMap extends ymaps.interfaces.IChild {
        getParent():ymaps.interfaces.IControlParent;
        setParent(parent:ymaps.interfaces.IControlParent):ymaps.interfaces.IChildOnMap;
    }
}