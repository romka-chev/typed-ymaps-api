module ymaps {
    export module interfaces {
        export interface IFreezable {
            events:IEventManager;

            freeze():IFreezable;
            isFrozen():boolean;
            unfreeze():IFreezable;
        }
    }
}