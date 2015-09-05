module ymaps {
    export module overlay {
        export module hotspot {
            export class Hint extends interfaces.IOverlay {
                constructor(geometry:interfaces.IPixelPointGeometry, data?:any, options?:HintOptions);

                getElement():HTMLElement;

                getLayout():vow.Promise; // todo generics?
                getLayoutSync():interfaces.ILayout;

                isEmpty():boolean;
            }
            export class HintOptions {
                cursor:string;
                interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#opaque";
                layout:string|interfaces.ILayout;
                pane:string                                                                                                    = "outerHint"; // todo determine
                zIndex:number;
            }
        }
    }
}