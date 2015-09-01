module ymaps {
    export module router {
        export class Path extends GeoObject {

            getHumanJamsTime():string;
            getHumanLength():string;
            getHumanTime():string;
            getJamsTime():number;
            getLength():number;
            getSegments():router.Segment[];
            getTime():number;

        }
    }
}