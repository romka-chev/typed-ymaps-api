namespace ymaps.domEvent {

    // todo check is this correct
    interface Manager {
        add(htmlElement:HTMLElement, types:string|string[], callback:Function, context?:any, capture?:boolean):Manager;
        remove(htmlElement:HTMLElement, types:string|string[], callback:string|Function, context?:any, capture?:boolean):Manager;
        group(htmlElement:HTMLElement, capture?:boolean):event.Group;
    }

    declare var manager:Manager;
}