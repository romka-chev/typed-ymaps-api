module ymaps {
    export module interfaces {
        export interface IEventManager {
            add   (types:string|string[], callback:Function, context?:any, priority:number = 0):IEventManager;
            remove(types:string|string[], callback:Function, context?:any, priority:number = 0):IEventManager;

            fire(type:string, event?:ymaps.Event|any):IEventManager;
            group():IEventGroup;

            getParent():IEventManager|undefined; //todo null?
            setParent(parent:IEventManager|undefined):void; // todo null?
        }
    }
}