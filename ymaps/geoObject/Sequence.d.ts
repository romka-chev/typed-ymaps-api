namespace ymaps.geoObject {

    interface SequenceStatic {
        new(feature?:SequenceFeatures, options?:any):Sequence
    }
    interface Sequence extends interfaces.IGeoObject, interfaces.IGeoObjectSequence {
    }

    interface SequenceFeatures {
        children?:interfaces.IGeoObject[];
        geometry?:interfaces.IGeometry|any;
        properties?:interfaces.IDataManager|any;
    }

    declare var Sequence:SequenceStatic;
}