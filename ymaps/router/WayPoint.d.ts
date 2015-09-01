module ymaps {
    export module router {
        export class WayPoint extends GeoObject{

            properties:data.Manager; // todo determine?

            constructor(feature:WayPointFeature, options?:WayPointOption){
                super(feature, options);
            }
        }

        export class WayPointFeature extends GeoObjectFeature{
            properties:interfaces.IDataManager|WayPointFeatureProperties;
        }
        export class WayPointFeatureProperties extends GeoObjectFeatureProperties{}

        export class WayPointOption extends GeoObjectOptions{}

    }
}