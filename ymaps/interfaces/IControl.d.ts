namespace ymaps.interfaces {

    interface IControlStatic{
        new(options?:any):IControl;
    }
    interface IControl extends IChildOnMap {
        options:IOptionManager;

        getParent():IControlParent;
        setParent(parent:IControlParent):IControl; // todo report about typo in official docs
    }
}