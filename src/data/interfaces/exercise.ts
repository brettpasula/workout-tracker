import { Target } from "../enums/target";

export interface Exercise { 
    name: string,
    target: Target,
    reps: number,
    sets: number
}