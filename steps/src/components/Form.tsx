import React, { MouseEventHandler, useRef, useState } from 'react'
import { IWorkout } from '../models/IWorkout'
import { List } from './List';
import WorkoutComparator from '../utils/WorkoutComparator';

export const Form = () => {
    const [workouts, SetWorkouts] = useState<IWorkout[]>([]);
    const date = useRef<HTMLInputElement | null>(null);
    const length = useRef<HTMLInputElement | null>(null);


    const deleteWorckoutPattern = (w: IWorkout) => (event: React.MouseEvent<HTMLElement>) => {
        SetWorkouts(workouts.filter((e) => e !== w));
    }

    const handleAddWorckout: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        if (date.current && length.current) {
            const workout: IWorkout = { date: date.current.value, length: parseFloat(length.current.value) };

            if (!/^([\d]{2}).([\d]{2}).([\d]{4})$/i.exec(workout.date)) { return; }
            if (!workout.length) { return; }

            let copies = workouts.filter((e) => e.date === workout.date);
            if (copies.length == 0) {
                SetWorkouts((prev) => [...prev, workout].sort(WorkoutComparator.compare))
            } else {
                workout.length += copies[0].length;
                SetWorkouts((prev) => [...prev.filter((e) => e.date !== workout.date), workout].sort(WorkoutComparator.compare))
            }
        }

    }


    return (
        <form className="form">
            <div className="append">
                <div className="form-element">
                    <label htmlFor="date" className="form-label">Дата (ДД.MM.ГГГГ)</label>
                    <input type="text" ref={date} className="form-input" id="date" />
                </div>
                <div className="form-element">
                    <label htmlFor="length" className="form-label">Пройдено км</label>
                    <input type="text" ref={length} className="form-input" id="length" />
                </div>
                <button onClick={handleAddWorckout}>ОК</button>
            </div>
            <List workouts={workouts} onDeleteClickPattern={deleteWorckoutPattern} />
        </form>
    )
}
