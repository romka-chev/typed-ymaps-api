namespace ymaps.interfaces {

    // todo why it does not extends ymaps.interfaces.IDataManager?
    // todo @report about extending?
    interface IOptionManager extends ymaps.interfaces.IDataManager, IChild, IEventEmitter, IFreezable {
        getAll():any;
        getNative(key:string):any;
        resolve(key:string, name?:string):any;
        getName():string;
        setName(name:string):any;
        getParent():IOptionManager;
        // todo @report about type in docs?
        // todo maybe it is return ymaps.interfaces.IOptionManager instead of ymaps.interfaces.IChild?
        setParent(parent:IOptionManager):IOptionManager;
    }
}