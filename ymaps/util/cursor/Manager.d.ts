module ymaps {
    export module util {
        export module cursor {
            export class Manager {

                events:event.Manager;

                constructor(element:HTMLElement);

                push(key:"arrow"|"crosshair"|"grab"|"grabbing"|"help"|"zoom"|"move"|"pointer"|"inherit"):Accessor;

            }
        }
    }
}