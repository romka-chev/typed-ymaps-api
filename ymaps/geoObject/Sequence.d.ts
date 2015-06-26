module ymaps {
    export module geoObject {
        export class Sequence extends interfaces.IGeoObject, interfaces.IGeoObjectSequence {
            constructor(feature?:SequenceFeatures, options?:any);
        }

        export class SequenceFeatures {
            children:interfaces.IGeoObject[];
            geometry:interfaces.IGeometry|any;
            properties:interfaces.IDataManager|any;
        }
    }
}