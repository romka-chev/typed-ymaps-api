namespace ymaps.map.action {

    interface SingleStatic {
        new(tick:SingleTickOptions):Single;
    }
    interface Single extends interfaces.IMapAction {
        isActive():boolean;
    }

    interface SingleTickOptions {
        callback         ?:Function;
        center           ?:number;
        checkZoomRange   ?:boolean;
        duration         ?:number;
        globalPixelCenter?:number[];
        timingFunction   ?:string;
        zoom             ?:number;
    }

    declare var Single:SingleStatic;
    declare var defaultSingleTickOptions:SingleTickOptions = {
        checkZoomRange: false,
        duration      : 0,
        timingFunction: "linear",
    }
}