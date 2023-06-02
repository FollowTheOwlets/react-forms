import { IWorkout } from "../models/IWorkout";

export default class WorkoutComparator {
    static compare = (a: IWorkout, b: IWorkout) => {
        const d1 = a.date.split(".").map((e) => parseInt(e));
        const d2 = b.date.split(".").map((e) => parseInt(e));

        for (let i = 0; i < 3; i++) {
            if (d2[i] !== d1[i]) {
                return d2[i] - d1[i];
            }
        }
        return 0;
    }
}
