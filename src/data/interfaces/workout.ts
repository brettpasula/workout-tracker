import { Target } from "../enums/target";
import { Exercise } from "./exercise";

export interface Workout {
    name: string,
    date: Date,
    target: Target[],
    completed: boolean,
    exercises: Exercise[]
}
