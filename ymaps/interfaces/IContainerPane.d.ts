module ymaps {
    export module interfaces {
        export class IContainerPane extends IPane, IPositioningContext {
            getViewport():number[][];
        }
    }
}