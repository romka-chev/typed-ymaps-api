module ymaps {
    export module interfaces {
        declare class IMapAction extends IEventEmitter {
            begin(mapActionManager:map.action.Manager):void;
            end():void;
        }
    }
}