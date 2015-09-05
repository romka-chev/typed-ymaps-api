namespace ymaps.clusterer {

    interface HintStatic{
        new(clusterer:ymaps.Clusterer):Hint;
    }
    interface Hint extends ymaps.interfaces.IHintManager{
    }

    declare var Hint:HintStatic;
}