module ymaps {
    export module domEvent {
        export class manager {
            static add   (htmlElement:HTMLElement, types:string|string[], callback:Function,        context?:any, capture?:boolean):manager;
            static remove(htmlElement:HTMLElement, types:string|string[], callback:string|Function, context?:any, capture?:boolean):manager;
            static group (htmlElement:HTMLElement, capture?:boolean):event.Group;
        }
    }
}