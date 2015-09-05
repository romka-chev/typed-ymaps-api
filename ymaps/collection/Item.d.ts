namespace ymaps.collection {

    interface ItemStatic {
        // todo @dictionary
        new(options?:Object):Item;
    }
    interface Item extends ymaps.interfaces.IChildOnMap, ymaps.interfaces.ICustomizable, ymaps.interfaces.IEventEmitter, ymaps.interfaces.IParentOnMap {
        getMap():ymaps.Map;

        // todo @incompatible
        getParent():ymaps.interfaces.IParentOnMap;
        setParent(parent:ymaps.interfaces.IParentOnMap):Item;

        onAddToMap(map:ymaps.Map):any;
        onRemoveFromMap(oldMap:ymaps.Map):any;
    }

    declare var Item:ItemStatic;
}