namespace ymaps.multiRouter {

    interface MultiRouteStatic {
        new(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson, options:MultiRouteOptions = defaultMultiRouteOptions):MultiRoute;
    }
    interface MultiRoute extends interfaces.IGeoObject {

        editor:multiRouter.EditorAddon;
        model:multiRouter.MultiRouteModel;

        getActiveRoute():multiRouter.driving.Route|multiRouter.masstransit.Route;
        getBounds():number[][];
        getPixelBounds():number[][];
        getRoutes():GeoObjectCollection;
        getViaPoints():GeoObjectCollection;
        setActiveRoute(model:multiRouter.MultiRouteModel|interfaces.IMultiRouteModelJson):any;
    }

    interface MultiRouteOptions {
        activeRouteAutoSelection?:boolean;
        boundsAutoApply         ?:boolean;
        useMapMargin            ?:boolean;
        zoomMargin              ?:number|number[];

        // todo options with prefixes
    }

    declare var MultiRoute:MultiRouteStatic;
    declare var defaultMultiRouteOptions:MultiRouteOptions = {
        activeRouteAutoSelection: true,
        boundsAutoApply         : false,
        useMapMargin            : true,
        zoomMargin              : 0
    }
}