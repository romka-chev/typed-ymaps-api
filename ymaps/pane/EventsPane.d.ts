module ymaps {
    export module pane {
        export class EventsPane extends interfaces.IEventPane {

            // todo check is params really required
            constructor(map:Map, params:EventsPaneParameters);
        }

        export class EventsPaneParameters {
            css:any;// todo maybe string? or dictionary?
            zIndex:number = 0;
        }
    }
}