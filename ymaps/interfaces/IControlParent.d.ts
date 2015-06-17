module ymaps {
    export module interfaces {
        export class IControlParent extends IParentOnMap {
            state:IDataManager;

            getChildElement(child:IControl):vow.Promise;
        }
    }
}