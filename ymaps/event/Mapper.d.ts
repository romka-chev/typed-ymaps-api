namespace ymaps.event {

    interface MapperStatic {
        new(targetEventManager:interfaces.IEventManager, mappingTable:MapperMappingTable):Mapper;
    }
    interface Mapper extends interfaces.IEventTrigger {
    }

    interface MapperMappingTable extends Dictionary<boolean|MapperMappingTableFunction> {
    }
    interface MapperMappingTableFunction {
        (event:Event):Event;
    }

    declare var Mapper:MapperStatic;
}