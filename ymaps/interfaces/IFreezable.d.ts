module ymaps {
    export module interfaces {
        export class IFreezable {
            events:IEventManager;

            freeze():IFreezable;

            isFrozen():boolean;

            unfreeze():IFreezable;
        }
    }
}