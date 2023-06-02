import React from 'react'
import { IWorkout } from '../models/IWorkout'
import CloseIcon from '@mui/icons-material/Close';

interface IWorkoutProps {
    workout: IWorkout;
    onDeleteClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Workout = ({ workout, onDeleteClick }: IWorkoutProps) => {
    return (
        <div className="workout">
            <span className="date">{workout.date}</span>
            <span className="lehgth">{workout.length}</span>
            <button className="delete" onClick={onDeleteClick}><CloseIcon /></button>
        </div>
    )
}
