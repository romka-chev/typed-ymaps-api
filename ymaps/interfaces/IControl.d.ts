module ymaps {
    export module interfaces {
        declare class IControl extends IChildOnMap {
            options:IOptionManager;

            constructor(options?:any);

            getParent():IControlParent|undefined; // todo null?
            setParent(parent:IControlParent|undefined):IControl; // todo report about typo in official docs

        }
    }
}