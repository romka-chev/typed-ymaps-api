module ymaps {
    export module interfaces {
        declare class IControlParent extends IParentOnMap {
            state:IDataManager;

            getChildElement(child:IControl):vow.Promise;
        }
    }
}