module ymaps {
    export module interfaces {
        export class ICoordSystem {
            getDistance(point1:number[], point2:number[]):number;
            solveDirectProblem(startPoint:number[], direction:number[], distance:number):{
                startPoint:number[];
                startDirection:number[];
                endPoint:number[];
                endDirection:number[];
                distance:number;
                pathFunction:(part:number) => {
                    point:number[];
                    direction:number[];
                }
            };// todo extract class
            solveInverseProblem(startPoint:number[], endPoint:number[], reverseDirection:boolean = false):{
                startPoint:number[];
                startDirection:number[];
                endPoint:number[];
                endDirection:number[];
                distance:number;
                pathFunction:(part:number) => {
                    point:number[];
                    direction:number[];
                }
            };// todo extract class
        }
    }
}