import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS);
const [selectedCategory, setSelectedCategory] = useState();

function onTaskFormSubmit(taskObj) {
  setTasks([...tasks, taskObj]);
}

function handleDelete(text) {
  setTasks(tasks.filter(t => (t.text !== text)));
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setSelectedCategory={setSelectedCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList onDelete={handleDelete} selectedCategory={selectedCategory} tasks={tasks} />
    </div>
  );
}

export default App;
