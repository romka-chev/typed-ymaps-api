module ymaps {
    export module overlay {
        export module hotspot {
            export class Placemark extends interfaces.IOverlay {
                constructor(geometry:interfaces.IPixelPointGeometry, data?:any, options?:PlacemarkOptions);

                getElement():HTMLElement;
                getIconElement():HTMLElement;

                getIconLayout():vow.Promise; // todo generics?
                getIconLayoutSync():interfaces.ILayout; // todo null?

                getLayout():vow.Promise; // todo generics?
                getLayoutSync():interfaces.ILayout; // todo null?

                getShadowElement():HTMLElement;

                getShadowLayout():vow.Promise; // todo generics?
                getShadowLayoutSync():interfaces.ILayout; // todo null?

            }
            export class PlacemarkOptions {
                cursor:string;
                interactivityModel:"default#opaque"|"default#geoObject"|"default#layer"|"default#transparent"|"default#silent" = "default#geoObject";
                layout:string|Function; // todo determine?
                offset:number[] = [0,0]; // todo report about ambiguous declaration
                pane:string = "places"; // todo determine
                shadow:boolean = false;
                shadowLayout:string|Function; // todo determine?
                shadowOffset:number[] = [0,0]; // todo report about ambiguous declaration
                shadowsPane:string = "shadows"; // todo wtf? report about ambiguous type declaration
                zIndex:number;
            }
        }
    }
}