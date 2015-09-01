module ymaps {
    export module multiRouter {
        class EditorAddon extends interfaces.ICustomizable, interfaces.IEventEmitter {
            state:data.Manager; // todo determine?

            isActive():boolean;
            start(state:any):any;
            stop():any;
        }
    }
}