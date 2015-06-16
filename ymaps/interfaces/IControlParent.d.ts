module ymaps {
    export module interfaces {
        export interface IControlParent extends IParentOnMap {
            state:IDataManager;

            getChildElement(child:IControl):vow.Promise;
        }
    }
}