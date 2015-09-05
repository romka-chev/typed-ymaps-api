namespace ymaps.layout {

    interface ImageStatic extends ymaps.interfaces.ILayoutStatic{
        new(data:ImageData):Image;
    }
    interface Image extends interfaces.ILayout {
    }

    // todo wtf is  ILayout in docs?
    interface ImageData {
        options?:ImageDataOptions;
    }
    // todo wtf is  ILayout in docs?
    interface ImageDataOptions {
        imageClipRect?:number[][];
        imageHref    ?:string;
        imageOffset  ?:number[];
        imageSize    ?:number[];
        shape        ?:interfaces.IShape|Object;
    }

    declare var Image:ImageStatic;
}