module ymaps {
    export module event {
        export class Group extends interfaces.IEventGroup {
            constructor(events:interfaces.IEventManager);

            events:interfaces.IEventManager;
        }
    }
}