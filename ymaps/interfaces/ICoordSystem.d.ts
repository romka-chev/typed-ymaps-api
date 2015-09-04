module ymaps {
    export module interfaces {
        export class ICoordSystem {
            static getDistance(point1:number[], point2:number[]):number;

            static solveDirectProblem(startPoint:number[], direction:number[], distance:number):ICoordSystemSolveProblemResult;
            static solveInverseProblem(startPoint:number[], endPoint:number[], reverseDirection:boolean = false):ICoordSystemSolveProblemResult;
        }

        export interface ICoordSystemSolveProblemResult {
            startPoint:number[];
            startDirection:number[];
            endPoint:number[];
            endDirection:number[];
            distance:number;
            pathFunction:(part?:number) => ICoordSystemSolveProblemResultPathFunctionResult;
        }
        export interface ICoordSystemSolveProblemResultPathFunctionResult{
            point:number[];
            direction:number[];
        }
    }
}