namespace ymaps.interfaces {
    interface IControlParent extends ymaps.interfaces.IParentOnMap {
        state:ymaps.interfaces.IDataManager;

        getChildElement(child:ymaps.interfaces.IControl):vow.Promise;
    }
}