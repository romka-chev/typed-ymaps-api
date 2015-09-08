namespace ymaps.data {

    interface ManagerStatic{
        new(data:ymaps.Dictionary<any>):Manager;
    }
    interface Manager extends ymaps.interfaces.IDataManager, ymaps.interfaces.IFreezable {
        getAll():any;

        set(dictionary:ymaps.Dictionary<any>):Manager;
        set(path:string, value:any):Manager;
        setAll():Manager;

        unset(path:string|string[]):Manager;
        unsetAll():Manager;
    }

    declare var Manager:ManagerStatic;
}