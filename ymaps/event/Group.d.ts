namespace ymaps.event {

    interface GroupStatic {
        new(events:interfaces.IEventManager):Group;
    }
    interface Group extends interfaces.IEventGroup {
        events:interfaces.IEventManager;
    }

    declare var Group:GroupStatic;
}