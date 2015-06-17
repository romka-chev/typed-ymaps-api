module ymaps {
    export module interfaces {
        export class IMapAction extends IEventEmitter {
            begin(mapActionManager:map.action.Manager):void;

            end():void;
        }
    }
}