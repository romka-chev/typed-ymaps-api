module ymaps {
    export class Monitor {
        constructor(dataManager:interfaces.IDataManager|interfaces.IOptionManager);

        add(name:string|string[], changeCallback:Function, context?:any, params?:MonitorAddParams);
        forceChange():Monitor;
        get(name:string):any;
        remove(name:string|string[]):Monitor;
        removeAll():Monitor;
    }

    export interface MonitorAddParams {
        compareCallback?:(oldValue?:any, newValue?:any)=>any;
        compareCallbacks?:{[key:string]:(oldValue?:any, newValue?:any)=>any};
        defaultValue?:any;
        defaultValues?:{[key:string]:any};
        resolveCallback?:(name?:string, dataManager?:interfaces.IDataManager|interfaces.IOptionManager)=>any;
        resolveCallbacks?:{[key:string]:(name?:string, dataManager?:interfaces.IDataManager|interfaces.IOptionManager)=>any};
    }
}