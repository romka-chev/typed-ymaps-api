namespace ymaps.interfaces {
    interface IFreezable {
        events:ymaps.interfaces.IEventManager;

        freeze():IFreezable;
        unfreeze():IFreezable;
        isFrozen():boolean;

    }
}