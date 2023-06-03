import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { IWorkout } from './models/IWorkout';
import { List } from './components/List';

function App() {
  const [workouts, SetWorkouts] = useState<IWorkout[]>([]);

  const deleteWorckoutPattern = (w: IWorkout) => (event: React.MouseEvent<HTMLElement>) => {
    SetWorkouts(workouts.filter((e) => e !== w));
  }

  return (
    <div className="App">
      <Form SetWorkouts={SetWorkouts} />
      <List workouts={workouts} onDeleteClickPattern={deleteWorckoutPattern} />
    </div>
  );
}

export default App;
