namespace ymaps.map {

    interface HintStatic {
        new(map:Map):Hint;
    }
    interface Hint extends interfaces.IHintManager, interfaces.IHintSharingManager {
    }

    declare var Hint:HintStatic;
}