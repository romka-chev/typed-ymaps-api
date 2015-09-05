namespace ymaps.interfaces {
    interface ICoordSystem {
        getDistance(point1:number[], point2:number[]):number;
        solveDirectProblem(startPoint:number[], direction:number[], distance:number):ICoordSystemSolveProblemResult;
        solveInverseProblem(startPoint:number[], endPoint:number[], reverseDirection:boolean = false):ICoordSystemSolveProblemResult;
    }

    interface ICoordSystemSolveProblemResult {
        startPoint    :number[];
        startDirection:number[];
        endPoint      :number[];
        endDirection  :number[];
        distance      :number;
        pathFunction  :(part:number) => ICoordSystemSolveProblemResultPathFunctionResult;
    }
    interface ICoordSystemSolveProblemResultPathFunctionResult {
        point    :number[];
        direction:number[];
    }
}