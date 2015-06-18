module ymaps {
    export module collection {
        export class Item extends interfaces.IChildOnMap, interfaces.ICustomizable, interfaces.IEventEmitter, interfaces.IParentOnMap {
            constructor(options?:any);

            getMap():Map;

            getParent():interfaces.IParentOnMap;
            setParent(parent:interfaces.IParentOnMap):Item;

            onAddToMap(map:Map):void;
            onRemoveFromMap(oldMap:Map):void;

        }
    }
}