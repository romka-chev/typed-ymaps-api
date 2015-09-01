module ymaps {
    export module multiRouter {
        class MultiRoute extends interfaces.IGeoObject {

            editor:multiRouter.EditorAddon;
            model:multiRouter.MultiRouteModel;

            constructor(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson, options?:MultiRouteOptions);

            getActiveRoute():multiRouter.driving.Route|multiRouter.masstransit.Route; // todo null
            getBounds():number[][]; // todo null
            getPixelBounds():number[][]; // todo null
            getRoutes():GeoObjectCollection;
            getViaPoints():GeoObjectCollection;
            setActiveRoute(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson):any; // todo null
        }

        export class MultiRouteOptions {
            // todo options with prefixes

            activeRouteAutoSelection:boolean = true;
            boundsAutoApply:boolean          = false;
            useMapMargin:boolean             = true;
            zoomMargin:number|number[]       = 0;
        }
    }
}