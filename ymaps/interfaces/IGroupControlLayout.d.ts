module ymaps {
    export module interfaces {
        export interface IGroupControlLayout extends ILayout {
            new(data:any):IGroupControlLayout;

            getChildContainerElement():any;
        }
    }
}