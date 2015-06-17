module ymaps {
    export class Balloon extends interfaces.IBalloon, Popup {
        constructor(map:Map, options?:BalloonOptions);
    }
    export class BalloonOptions {
        autoPan:boolean                    = true;
        autoPanCheckZoomRange:boolean      = false;
        autoPanDuration:number             = 500;
        autoPanMargin:number|number[]      = 34;
        closeButton:boolean                = true;
        contentLayout:string|Function;
        layout:string|Function             = "islands#balloon";
        maxHeight:number;
        maxWidth:number;
        minHeight:number;
        minWidth:number;
        offset:number[];
        pane:string                        = "balloon";
        panelContentLayout:string|Function = null;
        panelMaxHeightRatio:number;
        panelMaxMapArea:number;
        shadow:boolean                     = true;
        shadowLayout:string|Function;
        shadowOffset:number[];
    }
}