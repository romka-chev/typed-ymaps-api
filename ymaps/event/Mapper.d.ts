module ymaps {
    export module event {
        export class Mapper extends interfaces.IEventTrigger {
            constructor(targetEventManager:interfaces.IEventManager, mappingTable:MapperMappingTable);

            createEventObject(type:string, event:any, target:any):Event;

            fire(type:string, event?:Event|any):Manager;

            once(types:string|string[], callback:(event?:Event) => any, context?:any, priority:number = 0):interfaces.IEventManager;

            setParent(parent:interfaces.IEventManager):Manager;
        }

        export class MapperMappingTable{
            [key:string]:boolean;
            [key:string]:(event?:Event) => Event;
        }

    }
}