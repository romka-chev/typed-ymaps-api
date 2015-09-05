module ymaps {
    export module multiRouter {
        class MultiRoute extends interfaces.IGeoObject {

            editor:multiRouter.EditorAddon;
            model:multiRouter.MultiRouteModel;

            constructor(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson, options?:MultiRouteOptions);

            getActiveRoute():multiRouter.driving.Route|multiRouter.masstransit.Route;
            getBounds():number[][];
            getPixelBounds():number[][];
            getRoutes():GeoObjectCollection;
            getViaPoints():GeoObjectCollection;
            setActiveRoute(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson):any;
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