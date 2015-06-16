module ymaps {
    export module interfaces {
        export interface IContainerPane extends IPane, IPositioningContext {
            getViewport():number[][];
        }
    }
}