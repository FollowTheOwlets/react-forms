import React, { MouseEventHandler, useRef, useState } from 'react'
import { IWorkout } from '../models/IWorkout'
import { List } from './List';
import WorkoutComparator from '../utils/WorkoutComparator';

interface IFormProps {
    SetWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}
export const Form = ({ SetWorkouts }: IFormProps) => {
    const date = useRef<HTMLInputElement | null>(null);
    const length = useRef<HTMLInputElement | null>(null);

    const handleAddWorckout: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        if (date.current && length.current) {
            const workout: IWorkout = { date: date.current.value, length: parseFloat(length.current.value) };

            if (!/^([\d]{2}).([\d]{2}).([\d]{4})$/i.exec(workout.date)) { return; }
            if (!workout.length) { return; }

            SetWorkouts((prev) => {
                let copies = prev.filter((e) => e.date === workout.date);
                if (copies.length == 0) {
                    return [...prev, workout].sort(WorkoutComparator.compare);
                } else {
                    workout.length += copies[0].length;
                    return [...prev.filter((e) => e.date !== workout.date), workout].sort(WorkoutComparator.compare);
                }
            })
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
        </form>
    )
}
