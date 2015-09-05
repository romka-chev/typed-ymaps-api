namespace ymaps.hotspot {

    interface LayerStatic {
        new(objectSource:interfaces.IHotspotObjectSource, options:LayerOptions = defaultLayerOptions):Layer;
    }
    interface Layer extends interfaces.IChildOnMap, interfaces.ICustomizable {
        balloon:layer.Balloon;
        hint:layer.Hint;

        getMap():Map;
        getObjectInPosition(coordinates:number[]):vow.Promise;
        getObjectSource():interfaces.IHotspotObjectSource;
        update():any;
    }

    interface LayerOptions {
        cursor            ?:string;
        dontChangeCursor  ?:boolean;
        hasBalloon        ?:boolean;
        hasHint           ?:boolean;
        interactivityModel?:string; // todo determine
        openBalloonOnClick?:boolean;
        openEmptyBalloon  ?:boolean; // todo report about error in type declaration
        openEmptyHint     ?:boolean;  // todo report about error in type declaration
        openHintOnHover   ?:boolean;
        pane              ?:string|interfaces.IEventPane; // todo report about string type missed
        zIndex            ?:number;
    }

    declare var Layer:LayerStatic;
    declare var defaultLayerOptions:LayerOptions = {
        cursor            : "pointer",
        dontChangeCursor  : false,
        hasBalloon        : true,
        hasHint           : true,
        interactivityModel: "default#layer",
        openBalloonOnClick: true,
        openEmptyBalloon  : false,
        openEmptyHint     : false,
        openHintOnHover   : true,
        pane              : "events"
    }
}