module ymaps {
    export module hotspot {
        export class Layer extends interfaces.IChildOnMap, interfaces.ICustomizable {

            balloon:layer.Balloon;
            hint:layer.Hint;

            constructor(objectSource:interfaces.IHotspotObjectSource, options?:LayerOptions);

            getMap():Map;
            getObjectInPosition(coordinates:number[]):vow.Promise;
            getObjectSource():interfaces.IHotspotObjectSource;
            update():void;
        }

        export class LayerOptions{
            cursor:string = "pointer";
            dontChangeCursor:boolean = false;
            hasBalloon:boolean = true;
            hasHint:boolean = true;
            interactivityModel:string = "default#layer"; // todo determine
            openBalloonOnClick:boolean = true;
            openEmptyBalloon:boolean = false; // todo report about error in type declaration
            openEmptyHint:boolean = false;  // todo report about error in type declaration
            openHintOnHover:boolean = true;
            pane:string|interfaces.IEventPane = "events"; // todo report about string type missed
            zIndex:number;
        }
    }
}