module ymaps {
    export module interfaces {
        export interface IEventGroup {
            add   (types:string|string[], callback:Function, context?:any, priority:number = 0):IEventGroup;
            remove(types:string|string[], callback:Function, context?:any, priority:number = 0):IEventGroup;

            removeAll():IEventGroup;
        }
    }
}