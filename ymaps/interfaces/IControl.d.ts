module ymaps {
    export module interfaces {
        export class IControl extends IChildOnMap {
            options:IOptionManager;

            constructor(options?:any);

            getParent():IControlParent;
            setParent(parent:IControlParent):IControl; // todo report about typo in official docs

        }
    }
}