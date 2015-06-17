module ymaps {
    export module interfaces {
        declare class IContainerPane extends IPane, IPositioningContext {
            getViewport():number[][];
        }
    }
}