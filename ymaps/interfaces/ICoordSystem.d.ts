module ymaps {
    export module interfaces {
        export class ICoordSystem {
            static getDistance(point1:number[], point2:number[]):number;

            static solveDirectProblem(startPoint:number[], direction:number[], distance:number):{
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
            static solveInverseProblem(startPoint:number[], endPoint:number[], reverseDirection:boolean = false):{
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