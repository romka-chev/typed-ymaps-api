namespace ymaps.multiRouter {

    interface EditorAddon extends interfaces.ICustomizable, interfaces.IEventEmitter {
        state:data.Manager;

        isActive():boolean;
        start(state:any):any;
        stop():any;
    }
}