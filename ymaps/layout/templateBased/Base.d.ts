namespace ymaps.layout.templateBased {

    interface BaseStatic extends ymaps.interfaces.ILayoutStatic{
        new(data:any):Base
    }
    interface Base extends interfaces.ILayout {
        build():void;
        clear():void;
        getShape():interfaces.IShape|undefined;
        rebuild():void;
    }

    declare var Base:BaseStatic;
}