namespace ymaps.map.action {

    interface Continuous extends interfaces.IMapAction {
        isActive():boolean;
        tick(tick:ContinuousTickOptions /* = defaultContinuousTickOptions */):Continuous;
    }

    interface ContinuousTickOptions {
        duration?:number;
        globalPixelCenter?:number[];
        pixelOffset?:number[];
        timingFunction?:string;
        zoom?:number;
    }

    declare var defaultContinuousTickOptions:ContinuousTickOptions = {
        duration      : 0,
        timingFunction: "linear"
    }
}