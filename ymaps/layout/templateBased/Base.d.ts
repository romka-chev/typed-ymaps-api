module ymaps {
    export module layout {
        export module templateBased {
            class Base extends interfaces.ILayout {
                constructor(data:any){
                    super(<any>data);
                }

                build():void;
                clear():void;
                getShape():interfaces.IShape|undefined;
                rebuild():void;
            }
        }
    }
}