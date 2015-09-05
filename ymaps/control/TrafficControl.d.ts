namespace ymaps.control {

    interface TrafficControlStatic {
        new(parameters:TrafficControlParameters = defaultTrafficControlParameters):TrafficControl;
    }
    interface TrafficControl extends interfaces.IControl, interfaces.ICustomizable {
        data:ymaps.data.Manager;
        state:ymaps.data.Manager;

        collapse():any;
        expand():any;
        getMap():Map;
        getProvider(key?:ymaps.TrafficProvider):interfaces.ITrafficProvider;
        hideTraffic():any;
        isExpanded():boolean;
        isTrafficShown():boolean;
        showTraffic():boolean;
    }
    interface TrafficControlParameters {
        data   ?:TrafficControlParametersData;
        options?:TrafficControlParametersOptions;
        state  ?:TrafficControlParametersState;
    }
    interface TrafficControlParametersData {
    }

    interface TrafficControlParametersOptions {
        collapseOnBlur?:boolean;
        float         ?:"left"|"right"|"none";
        floatIndex    ?:number;
        layout        ?:string|Function;
        maxWidth      ?:number|number[];
        position      ?:TrafficControlParametersOptionsPosition;
        size          ?:"small"|"large"|"auto";
        visible       ?:boolean;
    }
    interface TrafficControlParametersOptionsPosition {
        top   ?:number|string;
        right ?:number|string;
        bottom?:number|string;
        left  ?:number|string;
    }
    interface TrafficControlParametersState {
        providerKey ?:ymaps.TrafficProvider;
        trafficShown?:boolean;
    }

    declare var TrafficControl:TrafficControlStatic;
    declare var defaultTrafficControlParameters:TrafficControlParameters = {
        options: {
            collapseOnBlur: true,
            float         : "right",
            floatIndex    : 200,
            maxWidth      : [26, 195, 195],
            position      : {
                top   : "auto",
                right : "auto",
                bottom: "auto",
                left  : "auto",
            },
            size          : "auto",
            visible       : true,
        },
        state  : {
            providerKey : "traffic#actual",
            trafficShown: false,
        }
    }
}