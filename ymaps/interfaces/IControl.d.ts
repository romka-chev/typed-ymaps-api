module ymaps {
    export module interfaces {
        export interface IControl extends IChildOnMap {
            options:IOptionManager;

            new(options?:any):IControl;

            getParent():IControlParent|undefined; // todo null?
            setParent(parent:IControlParent|undefined):IControl; // todo report about typo in official docs

        }
    }
}