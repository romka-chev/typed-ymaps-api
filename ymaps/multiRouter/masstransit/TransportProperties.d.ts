module ymaps {
    export module multiRouter {
        export module masstransit {

            // todo maybe interface?
            export class TransportProperties {
                id:string;
                name:string;
                type:"bus"|"trolleybus"|"tramway"|"minibus"|"underground"|"suburban";
            }
        }
    }
}