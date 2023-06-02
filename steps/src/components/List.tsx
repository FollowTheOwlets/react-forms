import React from 'react'
import { IWorkout } from '../models/IWorkout'
import { Workout } from './Workout';

interface IListProps {
    workouts: IWorkout[];
    onDeleteClickPattern: (w: IWorkout) => (event: React.MouseEvent<HTMLElement>) => void
}

export const List = ({ workouts, onDeleteClickPattern }: IListProps) => {
    return (
        <div className="list">
            {workouts.map((workout: IWorkout) => {
                return <Workout workout={workout} onDeleteClick={onDeleteClickPattern(workout)} />
            })}
        </div>
    )
}
