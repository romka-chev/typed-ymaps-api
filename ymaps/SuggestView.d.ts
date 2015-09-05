module ymaps {
    export class SuggestView extends interfaces.ICustomizable, interfaces.IEventEmitter {

        options:SuggestViewOptionsManager;
        state:SuggestViewStateManager;

        constructor(element:HTMLElement|string, options?:SuggestViewOptions);

        destroy():any;
    }

    export class SuggestViewOptionsManager extends interfaces.IOptionManager {

    }
    export class SuggestViewStateManager extends data.Manager {
        get<T>(path:"request", defaultValue?:T):T|string;
        get<T>(path:"items", defaultValue?:T):T|SuggestViewStateManagerItems[];
        get<T>(path:"activeIndex", defaultValue?:T):T|number;
        get<T>(path:"panelClosed", defaultValue?:T):T|boolean;
    }

    export class SuggestViewStateManagerItems {
        value:any; // todo determine?
        displayName:string;
    }

    export class SuggestViewOptions {
        boundedBy:number[][];
        container:HTMLElement;
        layout:string|SuggestViewLayout            = "islands#suggestView";
        offset:number[];
        provider:string|interfaces.ISearchProvider = "yandex#map";
        results:number                             = 5;
        width:number;
        zIndex:number                              = 40000;
    }

    export class SuggestViewLayout implements interfaces.ISuggestViewLayout {
        constructor(params?:SuggestViewLayoutParameters);
    }

    export class SuggestViewLayoutParameters {
        suggestView:SuggestView;
        options:SuggestViewOptionsManager;
        state:SuggestViewStateManager;
    }
}