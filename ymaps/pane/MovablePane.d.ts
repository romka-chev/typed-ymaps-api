module ymaps {
    export module pane {
        export class MovablePane extends interfaces.IContainerPane {

            // todo check is params really required
            constructor(map:Map, params:MovablePaneParameters);
        }

        export class MovablePaneParameters {
            css:any;// todo maybe string? or dictionary?
            margin:number               = 0;
            overflow:"visible"|"hidden" = "hidden";
            zIndex:number               = 0;
        }
    }
}